import { getRandomMeal, mealById, mealByName, gethistoryMeals } from "../models/meal-model";
import { Messages } from "../utils/enums";

export function historyMeals() {
    return gethistoryMeals();
};

export async function randomMeal() {
    return await getRandomMeal();
};

export async function getMealById(id: number | string) {
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

    return await mealById(id);
};

export async function getMealByName(name: string) {
    if(!name) {
        return Messages.MISSING_DATA;
    };
    
    if(typeof name != "string") {
        return Messages.BAD_REQUEST;
    };
    
    return await mealByName(name);
};