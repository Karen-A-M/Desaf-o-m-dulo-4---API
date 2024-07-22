

export function processArguments(sendedMessage) {
    const message = JSON.parse(sendedMessage);
    if(!message.action) {
        return "No me mandaste una accion valida";
    }

    if(message.action == "getRandomFood") {
        return "entro a getRandomFood";
    }
    else if(message.action == "getRandomCocktail") {
        return "entro a getRandomCocktail";
    }
    else if(message.action == "foodById") {
        return "entro a foodById";
    }
    else if(message.action == "cocktailById") {
        return "entro a cocktailById";
    }
    else if(message.action == "foodByName") {
        return "entro a foodByName";
    }
    else if(message.action == "cocktailByName") {
        return "entro a cocktailByName";
    }
    else {
        return "ERROR!! ACCION INVALIDA";
    }
}