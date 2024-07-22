# Instructivo
## Aplicación sobre Comidas y Cockteles

### Se siguio la estructura mostrada a continuacion:
! (https://raw.githubusercontent.com/LalyAprendiendo/challenges-12-07-2024/main/consigna/modelo%20challenge.png)

Los llamados de informacion que se pueden hacer a traves de la aplicacion son los siguientes:
* Pedir de manera random la informacion de una comida o un cocktel (solamente muestra una opcion)
* Busqueda por Id de una comida o un cocktel (solamente muestra una opcion)
* Busqueda por nombre de una comida o un cocktel (muestra varias opciones, dependiendo de si las comidas o cockteles comparten la cadena de caracteres ingresados)

### Pedir de manera random la informacion de una comida o un cocktel
Se debe ingresar **getRandomMeal** si se desea pedir de manera random la informacion de una comida  
Se debe ingresar **getRandomCocktail** si se desea pedir de manera random la informacion de un cocktel

### Busqueda por Id de una comida o un cocktel
Se debe ingresar **mealById**, junto con el Id deseado, si se desea buscar por Id la informacion de una comida  
Se debe ingresar **cocktailById**, junto con el Id deseado, si se desea buscar por Id la informacion de un cocktel

### Busqueda por nombre de una comida o un cocktel
Se debe ingresar **mealByName**, junto con el nombre o la cadena de caracteres deseado, si se desea buscar por nombre la informacion de una comida  
Se debe ingresar **cocktailByName**, junto con el nombre o la cadena de caracteres deseado, si se desea buscar por nombre la informacion de un cocktel

### Historial de busquedas
Tambien se lleva un historial de busquedas que han realizado los usuarios, ademas de la informacion brindada

### Esta aplicacion usa las siguientes APIs:
* API de comidas https://www.themealdb.com/api.php
* API de cockteles https://www.thecocktaildb.com/api.php