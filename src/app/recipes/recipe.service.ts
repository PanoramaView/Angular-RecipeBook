import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

/* RecipeService is where we manage our Recipes */
@Injectable()
export class RecipeService {
    //recipeSelected = new Subject<Recipe>(); /* Object instantiated with EventEmitter, that will hold Recipe data */

    private recipes: Recipe[] = [
    new Recipe(
        'A Test Recipe', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 10),
        ]),
    new Recipe(
        'A Test Recipe2', 
        'This is simply a test2', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 3),
        ])
    ];

    constructor(private slService: ShoppingListService){}
    /* to get the Recipes from this array ▲▲▲ */
    getRecipes(){
        return this.recipes.slice(); /* will return a copy of the array Recipe[], can't get access, only a copy*/
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients); //add the ingredients of the Recipe in the shoppingList.component
    }
}