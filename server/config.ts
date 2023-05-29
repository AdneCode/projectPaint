import dotenv from "dotenv";
const { SERVER_PORT } = dotenv.config().parsed;

export const serverConfig = {
    port: SERVER_PORT,
};
