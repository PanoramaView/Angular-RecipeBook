import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>(); removed after service injection
  recipes: Recipe[]; /* empty cuz now the data are in the recipe.service, that will be injected */


  /* inject our Service */
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  /* onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    removed after service injection
  } */

}
