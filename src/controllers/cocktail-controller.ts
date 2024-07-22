import { getRandomCocktail, cocktailById, cocktailByName } from "../models/cocktail-model"; 
import { Messages } from "../utils/enums";


export async function randomCocktail() {
    return await getRandomCocktail();
};

export async function getCocktailById(id: number | string) {
    if(!id) {
        if(id != 0) {
            return Messages.MISSING_DATA;
        };
    };
    
    if(typeof id != "number") {
        if(typeof id != "string") {
            return Messages.BAD_REQUEST;
        };
    };

    return await cocktailById(id);
};

export async function getCocktailByName(name: string) {
    if(!name) {
        return Messages.MISSING_DATA;
    };
    
    if(typeof name != "string") {
        return Messages.BAD_REQUEST;
    };
    
    return await cocktailByName(name);
};