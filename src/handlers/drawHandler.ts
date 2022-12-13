import { mouse, Button, left, up, right, down } from "@nut-tree/nut-js";

export const drawCircle = async (radius: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.releaseButton(Button.LEFT);
};

export const drawRectangle = async (width: number, length: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(+width));
  await mouse.move(up(+length));
  await mouse.move(right(+width));
  await mouse.move(down(+length));
  await mouse.releaseButton(Button.LEFT);
};

export const drawSquare = async (width: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(+width));
  await mouse.move(up(+width));
  await mouse.move(right(+width));
  await mouse.move(down(+width));
  await mouse.releaseButton(Button.LEFT);
}
