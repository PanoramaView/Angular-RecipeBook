import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  //@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  /* @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number}>(); 
    removed after adding injection
   */
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing 
      .subscribe(
        (index:number) => {
          this.editedItemIndex = index;2
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          })
        }
      );
  }
  onAddItem(form: NgForm){
    // with reactive form
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount);
    this.slService.addIngredient(newIngredient);

    //old
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingName, ingAmount);
    // // this.ingredientAdded.emit(newIngredient) removed after injection
    // this.slService.addIngredient(newIngredient);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
