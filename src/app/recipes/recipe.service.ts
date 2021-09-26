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
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
          'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
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