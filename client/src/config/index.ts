//retrieves variables from a parsed .env file
// const { SERVER_PORT, SELF_URL, HOST_URL } = dotenv.config().parsed;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
const SELF_URL = process.env.REACT_APP_SELF_URL;
const HOST_URL = process.env.REACT_APP_HOST_URL;

console.log("SERVER_PORT", SERVER_PORT);
export const port = Number(SERVER_PORT);

const URL = "192.168.1.121";
export const hostURL = `http://${URL}:4000`;
export const localURL = `http://${URL}:3001`;
