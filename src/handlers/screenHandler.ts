import { FileType, mouse, Region, screen } from '@nut-tree/nut-js';
import { readFileSync } from 'fs';

export const getScreenshotBase64 = async () => {
  const { x, y } = await mouse.getPosition();

  const pathToImage = await screen.captureRegion(
    'screenshot',
    new Region((x - 100 <= 0 ? 100 : x) - 100, (y - 100 <= 0 ? 100 : y) - 100, 200, 200),
    FileType.PNG,
    process.cwd() + '/src/assets',
  );

  const base64 = readFileSync(pathToImage, 'base64');

  return base64;
};
