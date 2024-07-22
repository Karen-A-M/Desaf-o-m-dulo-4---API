import net from "net";
import { PORT } from "./utils/constants";
const client = net.createConnection({ port: PORT });

client.on("connect", () => {

    // const data = { action: "getRandomMeal" }  // => utiliza getRandomMeal
    // const data = { action: "mealById", body: { id: 52773 } }  // => utiliza mealById
    // const data = { action: "mealByName", body: { name: "spicy" } }  // => utiliza mealByName

    // const data = { action: "getRandomCocktail" }  // => utiliza getRandomCocktail
    // const data = { action: "cocktailById", body: { id: 11007 } }  // => utiliza cocktailById
    const data = { action: "cocktailByName", body: { name: "margarita" } }  // => utiliza cocktailByName

    // const data = { accion: "getRandomMeal" }  // => Probar si me tira error
    // const data = { action: "getRandomDrink" }  // => Probar si me tira error

    

    const message = JSON.stringify(data);
    client.write(message);

});

client.on("data", async (messageOfServer) => {
    const message = messageOfServer.toString();
    console.log(JSON.parse(message));
});