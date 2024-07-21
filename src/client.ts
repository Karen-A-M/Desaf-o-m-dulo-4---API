const net = require("net");
const client = new net.createConnection({port: 3000});

client.on("connect", () => {
    const book = {
        name: "50 sombras de Json",
        author: "JavaScript",
        tags: [
            "Drama",
            "Ficcion", 
            "Comedia"
        ],
        sold: 8459672
    };

    // const data = { action: "read" }  // => utiliza getAll
    // const data = { action: "readById", body: { id: 0 } }  // => utiliza getById
    // const data = { action: "readByName", body: { name: "" } }  // => utiliza getByName
    // const data = { action: "readByAuthor", body: { author: "" } }  // => utiliza getByAuthor
    // const data = { action: "create", body: book }  // => utiliza create
    const data = { action: "modify", body: { id: 12, name: "nuevo nombre" } } // => utiliza modify
    // const data = { action: "delete", body: { id: 25 } }  // => utiliza deleteById

    const message = JSON.stringify(data);
    client.write(message);

});

client.on("data", (messageOfServer) => {
    console.log(JSON.parse(messageOfServer));
});