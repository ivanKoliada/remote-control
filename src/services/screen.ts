import Jimp from 'jimp';
import { mouse, Region, screen } from '@nut-tree/nut-js';

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


  const region = new Region(xPos, yPos, PRNT_SIZE, PRNT_SIZE);

  const BRGImage = await screen.grabRegion(region);

  const RGBImage = await BRGImage.toRGB();

  const image = new Jimp(RGBImage);

  const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

  const base64 = buffer.toString('base64');

  return base64;
};
