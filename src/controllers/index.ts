import { createWebSocketStream, WebSocket } from 'ws';
import { COMMAND } from '../constants';
import * as Mouse from '../services/mouse';
import { drawCircle, drawRectangle, drawSquare } from '../services/draw';
import { getScreenshotBase64 } from '../services/screen';
import { mouse } from '@nut-tree/nut-js';
import { sendResponse } from '../helpers';

export const wsController = (ws: WebSocket) => {
  console.log('Connection to websocket server is success');

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (rawData: string) => {
    const [command, width, length] = rawData.split(' ');

    switch (command) {
      case COMMAND.MOUSE_POSITION:
        const { x, y } = await mouse.getPosition();
        sendResponse(duplex, `${command} ${x},${y}`);
        break;

      case COMMAND.MOUSE_UP:
        await Mouse.moveUp(+width);
        sendResponse(duplex, command);
        break;

      case COMMAND.MOUSE_DOWN:
        await Mouse.moveDown(+width);
        sendResponse(duplex, command);
        break;

      case COMMAND.MOUSE_LEFT:
        await Mouse.moveLeft(+width);
        sendResponse(duplex, command);
        break;

      case COMMAND.MOUSE_RIGHT:
        await Mouse.moveRight(+width);
        sendResponse(duplex, command);
        break;

      case COMMAND.DRAW_CIRCLE:
        await drawCircle(+width);
        sendResponse(duplex, command);
        break;

      case COMMAND.DRAW_RECTANGLE:
        await drawRectangle(+width, +length);
        sendResponse(duplex, command);
        break;

      case COMMAND.DRAW_SQUARE:
        await drawSquare(+width);
        sendResponse(duplex, command);
        break;

      case COMMAND.PRNT_SCRN:
        const base64 = await getScreenshotBase64();
        sendResponse(duplex, `${command} ${base64}`);
        break;

      default:
        console.log(command);
        break;
    }
  });

  ws.on('close', () => console.log('Client has disconnected!'));
};
