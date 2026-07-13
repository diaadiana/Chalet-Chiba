const fs = require('fs');
const svgPath = 'c:\\Users\\user\\Desktop\\chibaultimasansa\\public\\preloadercabana.svg';
let content = fs.readFileSync(svgPath, 'utf8');

content = content.replace(/<path\b/g, '<path class="draw-path" pathLength="1"');
content = content.replace(/stroke="#[a-fA-F0-9]{6}"/g, 'stroke="currentColor"');
content = content.replace(/stroke="#000000"/g, 'stroke="currentColor"');
content = content.replace(/width="100%"/g, 'width="100%" height="auto"');

fs.writeFileSync(svgPath, content, 'utf8');
console.log("SVG processed successfully.");
