<h1 align="center"> El código del sabor: Recetas para programar tu paladar </h1>

<p align="center">
  <img src="https://cdn.pixabay.com/photo/2023/11/26/00/41/ai-generated-8412657_1280.png"/>
</p>

<h2 align="center"> Aplicación sobre Comidas y Cocteles </h2>

Dentro de nuestra aplicación encontraras nuestro "Menú 404", ya que son sabores que no encontrarás en ningún otro lugar.
</p>

<h3 align="center"> Los llamados de información que se pueden hacer a través de la aplicación son los siguientes: </h3>

* Pedir la receta de una comida o un coctel de manera random.
* Búsqueda por Id de una comida o un coctel.
* Búsqueda por nombre de una comida o un coctel (puede llegar a mostrar varias recetas, dependiendo de si las comidas o cocteles de nuestro menú comparten la cadena de caracteres ingresados).
* Historial de las búsquedas que han realizado los usuarios, además de la información sobre las recetas brindadas.

<h3> Pedir la receta de una comida o un coctel de manera random </h3>
* Se debe ingresar **getRandomMeal** si se desea pedir la receta de una comida de manera random.  
* Se debe ingresar **getRandomCocktail** si se desea pedir la receta de un coctel de manera random.

### **Búsqueda por Id de una comida o un coctel:**
Se debe ingresar **mealById**, junto con el Id deseado, si se desea buscar la receta de una comida a través de su Id.  
Se debe ingresar **cocktailById**, junto con el Id deseado, si se desea buscar la receta de un coctel a través de su Id.

<h2 align="center"> Búsqueda por nombre de una comida o un coctel </h2>
Se debe ingresar **mealByName**, junto con el nombre o la cadena de caracteres deseado, si se desea buscar por nombre la receta de una comida.  
Se debe ingresar **cocktailByName**, junto con el nombre o la cadena de caracteres deseado, si se desea buscar por nombre la receta de un coctel.  

<h2 align="center"> Historial de búsquedas </h2>
Se debe ingresar **historyMeals** si se desea pedir el historial de las búsquedas de comidas que han realizado los usuarios, además de la información sobre las recetas brindadas. 
Se debe ingresar **historyCocktails** si se desea pedir el historial de las búsquedas de cocteles que han realizado los usuarios, además de la información sobre las recetas brindadas. 

<h2 align="center"> Pedir la receta de una comida o un coctel de manera random </h2>
### **Esta aplicación usa las siguientes Apis publicas:**
* API de comidas https://www.themealdb.com/api.php
* API de cocteles https://www.thecocktaildb.com/api.php