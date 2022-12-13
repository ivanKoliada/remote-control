import { Duplex } from 'stream';
import { WebSocket } from 'ws';

export const sendResponse = (duplex: Duplex, response: string) => {
  duplex.write(response);
};
