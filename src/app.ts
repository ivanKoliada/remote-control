import { HTTP_PORT, SOCKET_PORT } from './constants';
import { httpServer } from './http_server';
import { wsController } from './controllers';
import { wss } from './ws_server';

export const init = () => {
  httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
  });
  
  wss.on('connection', wsController)

  console.log(`Start websocket server on the ${SOCKET_PORT} port!`);

  process.on('SIGINT', () => {
    httpServer.close(() => {
      process.exit(0);
    });

    wss.close(() => {
      process.exit(0);
    })
  });
};
