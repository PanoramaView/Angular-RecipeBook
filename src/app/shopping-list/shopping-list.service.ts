import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    // inform that new data is available
    ingredientsChange = new EventEmitter<Ingredient[]>(); 
    // now this can EventEmitter can emit Ingredient[]

    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice(); /* will return a copy of the array Recipe[], can't get access, only a copy*/

    }

    //when we add ingredients
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice()); // pass the data to the copy of the original Ingredient array
    }
}