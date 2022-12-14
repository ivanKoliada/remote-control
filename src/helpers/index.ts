import { Duplex } from 'stream';

export const sendResponse = (duplex: Duplex, response: string, command: string) => {
  console.log(`\x1b[35mRequested command: ${command}\x1b[0m`);
  duplex.write(response);
};
