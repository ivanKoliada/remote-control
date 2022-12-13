import { WebSocket } from 'ws';

export const sendResponse = (ws: WebSocket, response: string) => {
  ws.send(response);
};
