import { Component, OnInit } from '@angular/core';

import { GemModel } from '../gemmodel';

import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gem Store';
  now = Date.now().toString();

    cart: cartmodel = {
        totalprice: 0,
        totalquantity: 0,
        items: [],
    };
    
    ngOnInit() {
        //TODO: pull data from an API here:
        console.log(JSON.stringify(this.gems));
    }

    gems: GemModel[] = [{
        id: 1,
        name: 'Dodecahedron',
        price: 9.50,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.',
        fullImagePath: './assets/gem-images/gem-01.gif',
        inventory: 5,
        colors: ['red', 'orange', 'yellow'],
        reviews: [
            {
            id: 1,
            createddate: 'Tuesday',
            author: 'Rick Sanchez',
            rating: 5,
            body: 'I love this product!'
            },
            {
            id: 1,
            createddate: 'Thursday',
            author: 'Morty',
            rating: 1,
            body: 'I hate this product!',
                  }],
    },
                        
    {
        id: 2,
        name: 'Cubichloron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.',
        fullImagePath: './assets/gem-images/gem-05.gif',
        inventory: 20,
        colors: ['red', 'maroon'],
        reviews: [],
    },
    {
        id: 3,
        name: 'Diachromal',
        price: 5.99,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.',
        fullImagePath: './assets/gem-images/gem-09.gif',
        inventory: 0,
        colors: ['blue', 'green', 'red'],
        reviews: [],
    }];
}
