import { Duplex } from 'stream';

export const sendResponse = (duplex: Duplex, response: string) => {
  duplex.write(response);
};
