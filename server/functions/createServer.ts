import type { Express, Request, Response } from 'express';
import {
    T_ClientToServerEvents,
    T_ServerToClientEvents,
} from '../../types/types';

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app: Express = express();
const server = http.createServer(app);
//Socket IO related
const io = new Server<T_ClientToServerEvents, T_ServerToClientEvents>(server);
export type T_Io = typeof io;
export interface ReqType<T> extends Request<T> {
    body: T;
    user: T;
}
export type ResType<T> = Response<{ data?: T; message: string }>;
export const createServer = () => {
    return { app, io, express, server };
};
