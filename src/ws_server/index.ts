import { Server } from 'ws';

import { SOCKET_PORT } from '../constants';

export const wss = new Server({ port: +SOCKET_PORT });

// wss.on('connection', (ws) => {
//   console.log('Connection to websocket server is success');

//   ws.on('message', async (buffer: RawData) => {
//     const data = buffer.toString().split(' ');

//     const [command, width, length] = data;

//     switch (command) {
//       case COMMAND.MOUSE_POSITION:
//         const { x, y } = await getCurrentMousePosition();
//         sendResponse(ws, `${command} ${x},${y}`);
//         break;

//       case COMMAND.MOUSE_UP:
//         await Mouse.moveUp(+width);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.MOUSE_DOWN:
//         await Mouse.moveDown(+width);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.MOUSE_LEFT:
//         await Mouse.moveLeft(+width);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.MOUSE_RIGHT:
//         await Mouse.moveRight(+width);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.DRAW_CIRCLE:
//         await drawCircle(+width);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.DRAW_RECTANGLE:
//         await drawRectangle(+width, +length);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.DRAW_SQUARE:
//         await drawSquare(+width);
//         sendResponse(ws, command);
//         break;

//       case COMMAND.PRNT_SCRN:
//         const base64 = await getScreenshotBase64();
//         sendResponse(ws, `${command} ${base64}`);
//         break;

//       default:
//         console.log(command);
//         break;
//     }
//   });

//   ws.on('close', () => console.log('Client has disconnected!'));
// });
