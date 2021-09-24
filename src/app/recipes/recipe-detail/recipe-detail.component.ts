import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
              private route: ActivatedRoute,// fetch route id
              private router: Router)
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
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    /* alternative more complex to use the id that you Get from ngOnInit() 
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); */
  }
  onDeleteRecipe(){

  }
}
