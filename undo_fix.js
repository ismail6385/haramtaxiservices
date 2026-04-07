const fs = require('fs');
let text = fs.readFileSync('lib/blogData.ts', 'utf8');

const badInsertionStart = '    faqs?: { question: string; answer: string }[';
// We look for where the bad insertion starts
const startIndex = text.indexOf(badInsertionStart);

if (startIndex !== -1) {
    // The insertion ended with "];" replacing the original.
    // However, it ended before the original ending of BlogPost interface.
    // The original interface ends with "}\n\nexport const blogData".
    // We can just find the end of the insertion by finding the occurrence of "export const blogData"
    // and removing everything between our bad insertion and that "export const blogData", except the closing brace.

    // Let's be more precise. The bad text was inserted right AT the bracket.
    // Original:  `    faqs?: { question: string; answer: string }[];\n}\n\nexport const blogData...`
    // Bad text:  `    faqs?: { question: string; answer: string }[\n    {\n        slug... \n];\n}\n\nexport const blogData...`

    // Let's find the closing of the file interface.
    const expectedToken = '];\\n}'; // wait, what was it exactly?
    
    // Easier way: The bad insertion started at line 11.
    // The previous text was fine up until `faqs?: { question: string; answer: string }[`.
    const fixPart1 = text.substring(0, startIndex);
    
    // The text AFTER the insertion:
    // The insertion ends with `\n];` (from `output + '\n];'`).
    // AND we have it followed immediately by `\n}` which was the rest of the interface.
    // But since the original string had `];`, the generate script replaced `];` completely.
    // So the original text continued exactly after that replaced `];`.
    
    // We can find the closing `];\n}\n` which indicates the end of the BAD insertion.
    // Because the last generated item ends with `\n        ]\n    },\n];`
    
    // More robustly: let's use regex to find where `export const blogData` starts.
    const exportIndex = text.indexOf('export const blogData: BlogPost[]');
    if (exportIndex !== -1) {
        // We know the interface BlogPost just has `}` before this.
        let newText = fixPart1 + '    faqs?: { question: string; answer: string }[];\n}\n\n' + text.substring(exportIndex);
        
        fs.writeFileSync('lib/blogData.ts', newText, 'utf8');
        console.log('Fixed lib/blogData.ts by removing the misplaced generated items.');
    } else {
        console.log('Could not find export const blogData');
    }
} else {
    console.log('File does not seem to have the bad insertion, no changes made.');
}
