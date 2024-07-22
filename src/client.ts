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

    // const data = { action: "getRandomFood" }  // => utiliza getRandomFood
    // const data = { action: "getRandomCocktail" }  // => utiliza getRandomCocktail
    // const data = { action: "foodById", body: { id: 0 } }  // => utiliza foodById
    // const data = { action: "cocktailById", body: { id: 0 } }  // => utiliza cocktailById
    // const data = { action: "foodByName", body: { name: "" } }  // => utiliza foodByName
    const data = { action: "cocktailByName", body: { name: "" } }  // => utiliza cocktailByName
    

    const message = JSON.stringify(data);
    client.write(message);

});

client.on("data", (messageOfServer) => {
    console.log(JSON.parse(messageOfServer));
});