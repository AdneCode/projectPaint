//Socket
import { Socket } from 'socket.io';
import { connectById } from './socket/connectById';
//Server configuration
import corsMiddleWare from 'cors';
import { serverConfig } from './config';
import { createServer } from './functions';

//Config
const { app, io, express, server } = createServer();

app.use(corsMiddleWare());
app.use(express.json());

//Socket
const onConnection = (socket: Socket) => {
    try {
        console.log(`[onConnection] user with id ${socket.id} connected`);
        connectById(io, socket);
    } catch (error) {}
};
try {
    io.on('connect', onConnection);
} catch (error) {
    console.log(error);
}
const PORT = serverConfig.port;
server.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`));
