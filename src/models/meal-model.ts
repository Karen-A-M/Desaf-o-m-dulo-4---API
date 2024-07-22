import { URL_RandomMeal } from "../utils/constants";
import { URL_API_MEAL } from "../utils/constants";
import { Messages } from "../utils/enums";

export async function getRandomMeal() {
    const response = await fetch(URL_RandomMeal);
    const data = await response.json();

    const arrayIngredients = [];
    const {idMeal, strMeal, strInstructions} = data.meals[0];
    for(const propiedad in data.meals[0]) {
        if (propiedad.search("strIngredient") != -1 && data.meals[0][propiedad]) {
            arrayIngredients.push(data.meals[0][propiedad]);
        };
    };
    const meal = { Id: idMeal, Name: strMeal, Ingredients: arrayIngredients, Instructions: strInstructions};

    
    return meal;
};

export async function mealById(id: string | number) {
    const response = await fetch(URL_API_MEAL + "lookup.php?i=" + id);
    const data = await response.json();

    if(!data.meals) {
        return Messages.NOT_FOUND;
    }

    const arrayIngredients = [];
    const {idMeal, strMeal, strInstructions} = data.meals[0];
    for(const propiedad in data.meals[0]) {
        if (propiedad.search("strIngredient") != -1 && data.meals[0][propiedad]) {
            arrayIngredients.push(data.meals[0][propiedad]);
        };
    };
    const meal = { Id: idMeal, Name: strMeal, Ingredients: arrayIngredients, Instructions: strInstructions};
    return meal;
};

export async function mealByName(name: string) {
    const response = await fetch(URL_API_MEAL + "search.php?s=" + name);
    const data = await response.json();

    if(!data.meals) {
        return Messages.NOT_FOUND;
    };
    
    const arrayMeals = [];
    data.meals.forEach((eachMeal) => {
    const {idMeal, strMeal, strInstructions} = eachMeal;
    const arrayIngredients = [];
    for(const propiedad in eachMeal) {
        if (propiedad.search("strIngredient") != -1 && eachMeal[propiedad]) {
            arrayIngredients.push(eachMeal[propiedad]);
        };
    };
    const meal = { Id: idMeal, Name: strMeal, Ingredients: arrayIngredients, Instructions: strInstructions};
    arrayMeals.push(meal);
    });

    return arrayMeals;
};