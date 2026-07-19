const sharp = require('sharp');
sharp('public/hero-cabana.webp')
  .metadata()
  .then(meta => {
     const width = Math.floor(meta.width * 0.4);
     const height = Math.floor(meta.height * 0.4);
     const left = Math.floor(meta.width * 0.3); // center horizontally
     const top = 0; // top to avoid foreground wood
     return sharp('public/hero-cabana.webp')
       .extract({ left, top, width, height })
       .resize(1920, 1080, { fit: 'cover', position: 'top' })
       .toFile('public/hero-forest-poster.webp');
  })
  .then(() => console.log('SUCCESS'))
  .catch(console.error);
