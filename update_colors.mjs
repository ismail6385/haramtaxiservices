import fs from 'fs';
import path from 'path';

const searchTerms = [
  { regex: /brand-teal/g, replace: 'brand-navy' },
  { regex: /brand-amber/g, replace: 'brand-gold' },
  // Let's also replace default teal classes with navy classes to change the color scheme
  { regex: /text-teal-([0-9]+)/g, replace: 'text-slate-$1' },
  { regex: /bg-teal-([0-9]+)/g, replace: 'bg-slate-$1' },
  { regex: /border-teal-([0-9]+)/g, replace: 'border-slate-$1' },
  { regex: /text-amber-([0-9]+)/g, replace: 'text-yellow-$1' },
  { regex: /bg-amber-([0-9]+)/g, replace: 'bg-yellow-$1' },
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
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css'].includes(ext)) {
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
          console.log(`Updated design tokens in: ${fullPath}`);
        }
      }
    }
  }
}

const targetPath = process.argv[2] || process.cwd();
console.log(`Replacing brand color references in: ${targetPath}`);
processDirectory(targetPath);
console.log('Update complete.');
