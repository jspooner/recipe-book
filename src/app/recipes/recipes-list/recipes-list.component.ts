import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('California Sushi Rolls','Crab and Avocado','https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/california-roll-sushi_33781.jpg'),
    new Recipe('Dragon Rolls','Crab and Avocado','https://www.justonecookbook.com/wp-content/uploads/2016/04/Dragon-Roll-New-600x400.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
