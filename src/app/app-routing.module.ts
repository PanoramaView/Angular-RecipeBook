import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { Recipe } from './recipes/recipe.model';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent, children:[
        { path: '', component: RecipeStartComponent },
        { path: ':id', component: RecipeDetailComponent },
    ]},
    //nesting. note: AuthGuard e AuthService needs to be added to the providers in app.module
    { path: 'shopping-list', component: ShoppingListComponent},
    //{ path: 'not-found', component: PageNotFoundComponent }, //wildcard url
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!'}},
    { path: '**', redirectTo: '/not-found'} // catch all not existing paths to redirect to not-found
  ]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule] // says what is exportable in this module to other modules
})

export class AppRoutingModule{

}