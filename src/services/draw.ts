import { mouse, Button, straightTo } from '@nut-tree/nut-js';

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
  const { x, y } = await mouse.getPosition();

  mouse.config.mouseSpeed = 500;

  await mouse.drag(straightTo({ x: x + width, y }));
  await mouse.drag(straightTo({ x: x + width, y: y + length }));
  await mouse.drag(straightTo({ x, y: y + length }));
  await mouse.drag(straightTo({ x, y}));
};

export const drawSquare = async (width: number) => {
  const { x, y } = await mouse.getPosition();

  mouse.config.mouseSpeed = 500;
  
  await mouse.drag(straightTo({ x: x + width, y }));
  await mouse.drag(straightTo({ x: x + width, y: y + width }));
  await mouse.drag(straightTo({ x, y: y + width }));
  await mouse.drag(straightTo({ x, y }));
};
