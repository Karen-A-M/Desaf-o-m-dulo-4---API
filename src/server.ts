import net from "net";
const port = 3000;
const server = net.createServer();
const views = require("./views/index.js");
const callback = () => {
    console.log("SERVIDOR ESCUCHANDO EN EL PUERTO " + port);
}
    
server.on("connection", (connectedClient) => {
    console.log("El cliente se conecto :)");
    
    connectedClient.on("data", (messageOfClient) => {
        const message = messageOfClient.toString();
        const messageToSend = views.processArguments(message);
        const messageJson = JSON.stringify(messageToSend);
        connectedClient.write(messageJson);
    });
});
    
server.listen(port, callback);