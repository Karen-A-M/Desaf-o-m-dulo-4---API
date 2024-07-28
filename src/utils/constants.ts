export const PORT = 3000;
export const callback = () => {
    console.log("SERVIDOR ESCUCHANDO EN EL PUERTO " + PORT);
};

export const pathMeals = "./src/database/meals-db.json";
export const pathCocktails = "./src/database/cocktail-db.json";

export const URL_RandomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
export const URL_RandomCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
export const URL_API_MEAL = "https://www.themealdb.com/api/json/v1/1/";
export const URL_API_COCKTAIL = "https://www.thecocktaildb.com/api/json/v1/1/";


