import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {

  menu = {
    smallBites:[
      {
        name: 'la quercia prosciutto',
        description: 'melon, herb spread, sourdough'
      },
      {
        name: 'compressed watermelon',
        description: 'mint, balsamic reduction, goat cheese'
      }
    ],
    salads: [
      {
        name: 'tuscan kale',
        description: 'spiced crispy chickpeas, grape tomato, shaved parmesan, lemon caesar dressing'
      },
      {
        name: 'baby arugula salad',
        description: 'beets, apple, candied pecans, goat cheese, lemon thyme vinaigrette'
      }
    ],
    mains: [
      {
        name: 'springer mountain farms chicken',
        description: 'herbed butter sauce'
      },
      {
        name: 'seasonal gnocchi (veg)',
        description: 'herbed butter sauce, roasted mushroom'
      }
    ],
    sides: [
      {
        name: 'roasted broccolini'
      },
      {
        name: 'roasted brussels sprouts'
      },
      {
        name: 'herb roasted fingerling potatoes'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
