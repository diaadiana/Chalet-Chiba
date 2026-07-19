import sharp from 'sharp';
import { copyFile } from 'fs/promises';

const inputPath = './public/images/about/poza.png';
const outputPath = './public/images/about/poza_clean.png';

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const buf = Buffer.from(data);

const THRESHOLD = 230;

for (let i = 0; i < buf.length; i += 4) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];
  if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
    buf[i + 3] = 0;
  }
}

await sharp(buf, {
  raw: { width, height, channels }
})
  .png()
  .toFile(outputPath);

console.log('✅ Salvat ca poza_clean.png');
