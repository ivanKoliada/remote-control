import { down, left, mouse, right, up } from '@nut-tree/nut-js';

export const moveUp = async (distance: number) => {
  await mouse.move(up(distance));
};

export const moveDown = async (distance: number) => {
  await mouse.move(down(distance));
};

export const moveLeft = async (distance: number) => {
  await mouse.move(left(distance));
};

export const moveRight = async (distance: number) => {
  await mouse.move(right(distance));
};
