import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Products', url: '/home', icon: 'shirt' },
    { title: 'Categories', url: '/categories', icon: 'pricetags' },
    { title: 'Search', url: '/search', icon: 'search' }, 
  ];
  
 
  constructor() {}
}