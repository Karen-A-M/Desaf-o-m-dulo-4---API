import { writeFileSync, readFileSync, existsSync } from "node:fs"

export const PORT = 3000;
export const callback = () => {
    console.log("SERVIDOR ESCUCHANDO EN EL PUERTO " + PORT);
};
export const path = "./src/database/db.json";

export const URL_RandomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
export const URL_RandomCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
export const URL_API_MEAL = "https://www.themealdb.com/api/json/v1/1/";
export const URL_API_COCKTAIL = "https://www.thecocktaildb.com/api/json/v1/1/";

export function readFile() {
    if (!existsSync(path)) {
        writeFileSync(path, JSON.stringify([]));
    };

    const databaseJSON = readFileSync(path, { encoding: "utf-8" });
    const databaseJs = JSON.parse(databaseJSON);

    return databaseJs;
};

export function getAll() {
    return readFile()
};

export function writeFile(data) {
    if (!existsSync(path)) {
        writeFileSync(path, JSON.stringify([]));
    }

    const updatedData = getAll();
    updatedData.push(data);
    const dataJSON = JSON.stringify(updatedData)
    writeFileSync(path, dataJSON);
};
