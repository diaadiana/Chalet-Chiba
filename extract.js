import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegStatic);

ffmpeg('public/hero-video.mp4')
  .screenshots({
    timestamps: ['00:00:00.500'], // Take a frame at 0.5s to ensure it's not a black frame
    filename: 'hero-poster.jpg',
    folder: 'public/'
  })
  .on('end', function() {
    console.log('Screenshot taken successfully');
  })
  .on('error', function(err) {
    console.error('Error taking screenshot:', err);
  });
