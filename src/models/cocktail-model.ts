import { URL_RandomCocktail} from "../utils/constants";
import { URL_API_COCKTAIL } from "../utils/constants";
import { Messages } from "../utils/enums";

export async function getRandomCocktail() {
    const response = await fetch(URL_RandomCocktail);
    const data = await response.json();

    const arrayIngredients = [];
    const {idDrink, strDrink, strInstructions} = data.drinks[0];
    for(const propiedad in data.drinks[0]) {
        if (propiedad.search("strIngredient") != -1 && data.drinks[0][propiedad]) {
            arrayIngredients.push(data.drinks[0][propiedad]);
        };
    };
    const drink = { Id: idDrink, Name: strDrink, Ingredients: arrayIngredients, Instructions: strInstructions };
    return drink;
};

export async function cocktailById(id: string | number) {
    const response = await fetch(URL_API_COCKTAIL + "lookup.php?i=" + id);
    const data = await response.json();

    if(!data.drinks) {
        return Messages.NOT_FOUND;
    };

    const arrayIngredients = [];
    const {idDrink, strDrink, strInstructions} = data.drinks[0];
    for(const propiedad in data.drinks[0]) {
        if (propiedad.search("strIngredient") != -1 && data.drinks[0][propiedad]) {
            arrayIngredients.push(data.drinks[0][propiedad]);
        };
    }
    const drink = { Id: idDrink, Name: strDrink, Ingredients: arrayIngredients, Instructions: strInstructions };
    return drink;
};

export async function cocktailByName(name: string) {
    const response = await fetch(URL_API_COCKTAIL + "search.php?s=" + name);
    const data = await response.json();
    
    if(!data.drinks) {
        return Messages.NOT_FOUND;
    };
    
    const arrayDrinks = [];
    data.drinks.forEach((eachdrink) => {
        const {idDrink, strDrink, strInstructions} = eachdrink;
        const arrayIngredients = [];
        for(const propiedad in eachdrink) {
            if (propiedad.search("strIngredient") != -1 && eachdrink[propiedad]) {
                arrayIngredients.push(eachdrink[propiedad]);
            };
        };
        const drink = { Id: idDrink, Name: strDrink, Ingredients: arrayIngredients, Instructions: strInstructions };
        arrayDrinks.push(drink);
    });

    return arrayDrinks;
};