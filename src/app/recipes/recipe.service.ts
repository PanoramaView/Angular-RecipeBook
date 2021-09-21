import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

/* RecipeService is where we manage our Recipes */
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>(); /* Object instantiated with EventEmitter, that will hold Recipe data */

    private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];
    /* to get the Recipes from this array ▲▲▲ */
    getRecipes(){
        return this.recipes.slice(); /* will return a copy of the array Recipe[], can't get access, only a copy*/

    }
}