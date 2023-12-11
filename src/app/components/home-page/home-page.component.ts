import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products = [
    { id: 1, name: 'Product 1', imageUrl: 'http://placehold.it/250x250' },
    { id: 2, name: 'Product 2', imageUrl: 'http://placehold.it/250x250' },
    { id: 3, name: 'Product 3', imageUrl: 'http://placehold.it/250x250' },
    // Add more products as needed
  ];


  

}
