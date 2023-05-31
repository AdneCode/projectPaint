import io, { Socket } from "socket.io-client";
import {
  T_ClientToServerEvents,
  T_ServerToClientEvents,
} from "../../../types/types";

import { createContext } from "react";

export const socket: Socket<T_ServerToClientEvents, T_ClientToServerEvents> =
  io("192.168.1.121:4000", {
    transports: ["websocket"],
    autoConnect: true,
  });
export const SocketContext = createContext(socket);
