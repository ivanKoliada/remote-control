import { mouse, Button, straightTo, left, down, right, up } from '@nut-tree/nut-js';

mouse.config.mouseSpeed = 300;

export const drawCircle = async (radius: number) => {
  const { x, y } = await mouse.getPosition();
  const arccos = (Math.acos(1 / radius) * Math.PI) / 180;

  await mouse.pressButton(Button.LEFT);

  for (let i = 0; i <= 2 * Math.PI + arccos; i += arccos) {
    await mouse.move(
      straightTo({ x: x - radius * Math.sin(i), y: y - radius + radius * Math.cos(i) }),
    );
  }

  await mouse.releaseButton(Button.LEFT);
};

export const drawRectangle = async (width: number, length: number) => {

  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(width));
  await mouse.move(up(length));
  await mouse.move(right(width+3));
  await mouse.move(down(length));
  await mouse.releaseButton(Button.LEFT);
};

export const drawSquare = async (width: number) => {

  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(width));
  await mouse.move(up(width));
  await mouse.move(right(width+3));
  await mouse.move(down(width));
  await mouse.releaseButton(Button.LEFT);
};
