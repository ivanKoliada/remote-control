import { HTTP_PORT } from './constants';
import { httpServer } from './http_server';

export const init = () => {
  httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
  });

  process.on('SIGINT', () => {
    httpServer.close(() => {
      process.exit(0);
    });
  });
};
