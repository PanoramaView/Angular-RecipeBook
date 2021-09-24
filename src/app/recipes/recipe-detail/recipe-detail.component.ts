import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute)// fetch route id
              { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];// only gets the id once, not responsive
    this.route.params.subscribe( //with subscribe, it is responsive to changes
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShopl() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditToShopl(){

  }
  onDeleteToShopl(){

  }
}
