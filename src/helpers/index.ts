import { mouse } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';

export const sendResponse = (ws: WebSocket, response: string) => {
  ws.send(response);
};

export const getCurrentMousePosition = async () => {
  return await mouse.getPosition();
}