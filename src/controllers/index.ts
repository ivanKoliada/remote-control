import { RawData, WebSocket } from 'ws';
import { COMMAND } from '../constants';
import * as Mouse from '../handlers/mouseHandler';
import { drawCircle, drawRectangle, drawSquare } from '../handlers/drawHandler';
import { getScreenshotBase64 } from '../handlers/screenHandler';
import { mouse } from '@nut-tree/nut-js';
import { sendResponse } from '../helpers';

export const wsController = (ws: WebSocket) => {
  console.log('Connection to websocket server is success');

  ws.on('message', async (buffer: RawData) => {
    const [command, width, length] = buffer.toString().split(' ');

    switch (command) {
      case COMMAND.MOUSE_POSITION:
        const { x, y } = await mouse.getPosition();
        sendResponse(ws, `${command} ${x},${y}`);
        break;

      case COMMAND.MOUSE_UP:
        await Mouse.moveUp(+width);
        sendResponse(ws, command);
        break;

      case COMMAND.MOUSE_DOWN:
        await Mouse.moveDown(+width);
        sendResponse(ws, command);
        break;

      case COMMAND.MOUSE_LEFT:
        await Mouse.moveLeft(+width);
        sendResponse(ws, command);
        break;

      case COMMAND.MOUSE_RIGHT:
        await Mouse.moveRight(+width);
        sendResponse(ws, command);
        break;

      case COMMAND.DRAW_CIRCLE:
        await drawCircle(+width);
        sendResponse(ws, command);
        break;

      case COMMAND.DRAW_RECTANGLE:
        await drawRectangle(+width, +length);
        sendResponse(ws, command);
        break;

      case COMMAND.DRAW_SQUARE:
        await drawSquare(+width);
        sendResponse(ws, command);
        break;

      case COMMAND.PRNT_SCRN:
        const base64 = await getScreenshotBase64();
        sendResponse(ws, `${command} ${base64}`);
        break;

      default:
        console.log(command);
        break;
    }
  });

  ws.on('close', () => console.log('Client has disconnected!'));
};
