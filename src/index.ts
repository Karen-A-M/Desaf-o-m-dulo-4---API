import net from "net";
import { PORT } from "./utils/constants";
import { callback } from "./utils/constants";
import { endPoints } from "./views";

const server = net.createServer();

server.on("connection", (connectedClient) => {
    console.log("El cliente se conecto :)");
    
    connectedClient.on("data", async (messageOfClient) => {
        const message = messageOfClient.toString();
        const messageToSend = await endPoints(message);
        const messageJson = JSON.stringify(messageToSend);
        connectedClient.write(messageJson);
    });
});
    
server.listen(PORT, callback);