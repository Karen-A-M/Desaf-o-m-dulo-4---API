import { URL_RandomCocktail} from "../utils/constants";
import { URL_API_COCKTAIL } from "../utils/constants";
import { Messages } from "../utils/enums";

export async function getRandomCocktail() {
    const response = await fetch(URL_RandomCocktail);
    const data = await response.json();

    const {idDrink, strDrink, strInstructions} = data.drinks[0];
    const drink = { Id: idDrink, Name: strDrink, Instructions: strInstructions};
    return await drink;
};

export async function cocktailById(id: string | number) {
    const response = await fetch(URL_API_COCKTAIL + "lookup.php?i=" + id);
    const data = await response.json();

    if(!data.drinks) {
        return Messages.NOT_FOUND;
    }

    const {idDrink, strDrink, strInstructions} = data.drinks[0];
    const drink = { Id: idDrink, Name: strDrink, Instructions: strInstructions};
    return await drink;
};

export async function cocktailByName(name: string) {
    const response = await fetch(URL_API_COCKTAIL + "search.php?s=" + name);
    const data = await response.json();
    
    if(!data.drinks) {
        return Messages.NOT_FOUND;
    }
    
    const arrayDrinks = [];
    data.drinks.forEach((eachdrink) => {
    const {idDrink, strDrink, strInstructions} = eachdrink;
    const drink = { Id: idDrink, Name: strDrink, Instructions: strInstructions};
    arrayDrinks.push(drink);
    });

    return await arrayDrinks;
};