import { FileType, mouse, Region, screen } from '@nut-tree/nut-js';
import { readFileSync } from 'fs';

import { HALF_PRNT_SIZE, PRNT_SIZE } from '../constants';

export const getScreenshotBase64 = async () => {
  const { x, y } = await mouse.getPosition();
  const screenX = await screen.width();
  const screenY = await screen.height();

  let xPos = x - HALF_PRNT_SIZE;
  let yPos = y - HALF_PRNT_SIZE;

  if (x - HALF_PRNT_SIZE <= 0) {
    xPos = 0;
  } else if (x >= screenX - HALF_PRNT_SIZE) {
    xPos = screenX - PRNT_SIZE;
  }

  if (y - HALF_PRNT_SIZE <= 0) {
    yPos = 0;
  } else if (y >= screenY - HALF_PRNT_SIZE) {
    yPos = screenY - PRNT_SIZE;
  }

  const pathToImage = await screen.captureRegion(
    'screenshot',
    new Region(xPos, yPos, PRNT_SIZE, PRNT_SIZE),
    FileType.PNG,
    process.cwd() + '/src/assets',
  );

  const base64 = readFileSync(pathToImage, 'base64');

  return base64;
};
