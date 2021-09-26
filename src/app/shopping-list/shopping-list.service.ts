import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    // inform that new data is available
    ingredientsChange = new Subject<Ingredient[]>();
    //ingredientsChange = new EventEmitter<Ingredient[]>();
    // now this can EventEmitter can emit Ingredient[]
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice(); /* will return a copy of the array Recipe[], can't get access, only a copy*/

    }

    getIngredient(index:number) {
        return this.ingredients[index];
    }

    //when we add ingredients
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice()); // pass the data to the copy of the original Ingredient array
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); //spread operator, turn array into list (of elements)
        this.ingredientsChange.next(this.ingredients.slice());
        /* 
        ok, same ▲▲▲. But too many events emitted
        for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }
        */
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChange.next( this.ingredients.slice());
    }

    deleteIngredient(index: number ) {
        this.ingredients.splice(index, 1);
        this.ingredientsChange.next( this.ingredients.slice());
    }
}