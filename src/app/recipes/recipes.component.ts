import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] /* so that all recipe(s).component will share the same instance of the Service, but won't be able to access the same instance of other components like shopping-list*/
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { } //inject Service
  /* NB: this component and all the child compenents will use the same instance.
         otherwise the service where I emit the event would be a different instance to the one I listened to.
  */

  /* set up my Listener and get informed of any changes */
  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      })
  }

}
