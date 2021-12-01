import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>(); removed after service injection
  recipes: Recipe[]; /* empty cuz now the data are in the recipe.service, that will be injected */
  subscription: Subscription;

  /* inject our Service */
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipes = recipes;
          }
        )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /* onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    removed after service injection
  } */

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
