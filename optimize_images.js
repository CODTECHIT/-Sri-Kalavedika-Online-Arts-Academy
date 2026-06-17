const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Skip if it doesn't contain an img tag
  if (!/<img\s/.test(content)) return;

  // Regex to match img tags and capture their attributes
  // Note: This is a simple regex and might not catch all edge cases (like multiline attributes)
  // but it works for the standard structure in this project.
  const imgRegex = /<img([\s\S]*?)\/?>/g;
  
  content = content.replace(imgRegex, (match, attrs) => {
    // If it's already using Image from next/image, skip
    if (match.includes('<Image')) return match;

    let newAttrs = attrs;
    
    // Make sure we have a closing slash
    if (!newAttrs.endsWith('/')) {
        newAttrs += ' /';
    }

    // Add fill property since most images here are responsive containers
    if (!newAttrs.includes('fill')) {
        newAttrs = ' fill' + newAttrs;
    }
    
    // Add priority to first images in pages (hacky but works for Hero/Top sections)
    if (content.indexOf(match) < 2000 && !newAttrs.includes('priority')) {
        newAttrs = ' priority' + newAttrs;
    }

    return `<Image${newAttrs}>`;
  });

  // Add import if we changed something and it's not there
  if (content !== originalContent && !content.includes('next/image')) {
    // Insert after "use client" or at top
    if (content.startsWith('"use client";') || content.startsWith("'use client';")) {
      content = content.replace(/^(["']use client["'];?\s*)/, '$1\nimport Image from "next/image";\n');
    } else {
      content = 'import Image from "next/image";\n' + content;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Optimized images in: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

console.log('Starting image optimization...');
walkDir(path.join(__dirname, 'src'));
console.log('Done! Please run your dev server to verify.');
