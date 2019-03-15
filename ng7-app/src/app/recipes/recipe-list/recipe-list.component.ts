import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description of my recipe',
      'https://thestayathomechef.com/wp-content/uploads/2018/02/Best-Brownies-1-small.jpg'
    ),
    new Recipe(
    'Test Name',
    'Test Description of my recipe',
    'https://thestayathomechef.com/wp-content/uploads/2018/02/Best-Brownies-1-small.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
