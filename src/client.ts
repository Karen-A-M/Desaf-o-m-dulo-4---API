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

    // const data = { action: "getRandomMeal" }  // => utiliza getRandomMeal
    // const data = { action: "getRandomCocktail" }  // => utiliza getRandomCocktail
    // const data = { action: "mealById", body: { id: 0 } }  // => utiliza mealById
    // const data = { action: "cocktailById", body: { id: 0 } }  // => utiliza cocktailById
    const data = { action: "mealByName", body: { name: "" } }  // => utiliza mealByName
    // const data = { action: "cocktailByName", body: { name: "" } }  // => utiliza cocktailByName

    // const data = { accion: "getRandomMeal" }  // => Probar si me tira error
    // const data = { action: "getRandomDrink" }  // => Probar si me tira error

    

    const message = JSON.stringify(data);
    client.write(message);

});

client.on("data", (messageOfServer) => {
    console.log(JSON.parse(messageOfServer));
});