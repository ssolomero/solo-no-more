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
      imgUrl: '../../assets/N+S-01.jpg'
    },
    {
      title: 'din din',
      route: '/menu',
      imgUrl: '../../assets/N+S-01.jpg'
    },
    {
      title: 'table no.',
      route: '/seating-chart',
      imgUrl: '../../assets/N+S-01.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
