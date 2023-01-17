import { Server } from 'ws';

import { SOCKET_PORT } from '../constants';

export const wss = new Server({ port: +SOCKET_PORT });
