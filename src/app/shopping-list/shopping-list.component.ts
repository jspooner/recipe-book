import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Rice', 4),
    new Ingredient('Salmon', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
