import { Messages } from "../utils/enums"; 

export function endPoints(sendedMessage) {
    const message = JSON.parse(sendedMessage);
    if(!message.action) {
        return Messages.BAD_REQUEST;
    }

    if(message.action == "getRandomMeal") {
        return "entro a getRandomFood";
    }
    else if(message.action == "getRandomCocktail") {
        return "entro a getRandomCocktail";
    }
    else if(message.action == "mealById") {
        return "entro a foodById";
    }
    else if(message.action == "cocktailById") {
        return "entro a cocktailById";
    }
    else if(message.action == "mealByName") {
        return Messages.OK;
    }
    else if(message.action == "cocktailByName") {
        return Messages.NOT_FOUND;
    }
    else {
        return Messages.BAD_REQUEST;
    }
}