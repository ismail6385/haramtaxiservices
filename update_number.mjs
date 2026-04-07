import fs from 'fs';
import path from 'path';

const searchTerms = [
  { regex: /966569487569/g, replace: '996575806733' },
  { regex: /\+966569487569/g, replace: '+996575806733' },
  { regex: /\+966\s*56\s*948\s*7569/g, replace: '+996 57 580 6733' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        processDirectory(fullPath);
      }
    } else {
      const ext = path.extname(fullPath);
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let updated = false;

        for (const term of searchTerms) {
          if (content.match(term.regex)) {
            content = content.replace(term.regex, term.replace);
            updated = true;
          }
        }

        if (updated) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated: ${fullPath}`);
        }
      }
    }
  }
}

const targetPath = process.argv[2] || process.cwd();
console.log(`Searching and updating WhatsApp number in: ${targetPath}`);
processDirectory(targetPath);
console.log('Update complete.');
