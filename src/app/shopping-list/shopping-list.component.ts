import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { } /* inject Service, provided in appModule */

  /* all initialization in ngOnInit */
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  /* onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    removed, we do this in the service now.
  } */
}
