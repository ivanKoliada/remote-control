import { RawData, Server } from 'ws';
import { SOCKET_PORT } from '../constants';

export const wss = new Server({ port: +SOCKET_PORT });

console.log(`Start websocket server on the ${SOCKET_PORT} port!`);

wss.on('connection', (ws) => {
  console.log('Connection to websocket server is success');

  ws.on('open', ()=> {
    ws.send('something');
  });

  ws.on('message', (data: RawData) => {
    console.log(data.toString());
  });

  ws.send('some_command');

  ws.on('close', () => console.log('Client has disconnected!'));
});

