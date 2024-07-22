import { URL_RandomMeal } from "../utils/constants";
import { URL_API_MEAL } from "../utils/constants";
import { Messages } from "../utils/enums";

export async function getRandomMeal() {
    const response = await fetch(URL_RandomMeal);
    const data = await response.json();

    const {idMeal, strMeal, strInstructions} = data.meals[0];
    const meal = { Id: idMeal, Name: strMeal, Instructions: strInstructions};
    return await meal;
};

export async function mealById(id: string | number) {
    const response = await fetch(URL_API_MEAL + "lookup.php?i=" + id);
    const data = await response.json();

    if(!data.meals) {
        return Messages.NOT_FOUND;
    }

    const {idMeal, strMeal, strInstructions} = data.meals[0];
    const meal = { Id: idMeal, Name: strMeal, Instructions: strInstructions};
    return await meal;
};

export async function mealByName(name: string) {
    const response = await fetch(URL_API_MEAL + "search.php?s=" + name);
    const data = await response.json();

    if(!data.meals) {
        return Messages.NOT_FOUND;
    }
    
    const arrayMeals = [];
    data.meals.forEach((eachMeal) => {
    const {idMeal, strMeal, strInstructions} = eachMeal;
    const meal = { Id: idMeal, Name: strMeal, Instructions: strInstructions};
    arrayMeals.push(meal);
    });

    return await arrayMeals;
};