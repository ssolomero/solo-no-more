import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems = [
    {
      title: 'drinks',
      route: '/cocktail',
    },
    {
      title: 'table no.',
      route: '/seating-chart',
    },
    {
      title: 'din din',
      route: '/menu',
    },
    {
      title: 'festivities',
      route: '/activities'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
