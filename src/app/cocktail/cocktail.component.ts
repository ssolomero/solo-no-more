import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  sigCocks = [
    {
      name: 'lychee martini',
      description: 'vodka, lychee, lime'
    },
    {
      name: 'ginger paloma',
      description: 'tequila, ginger beer, grapfruit soda'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
