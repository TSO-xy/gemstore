import { Component } from '@angular/core';

import { GemModel } from '../gemmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gem Store';
  now = Date.now().toString();

    gems: GemModel[] = [{
        id: 1,
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.',
        fullImagePath: './assets/gem-images/gem-01.gif',
        inventory: 5,
        colors: ["red", "orange", "yellow"],
    },
                       
    {
        id: 2,
        name: 'Cubicle',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.',
        fullImagePath: './assets/gem-images/gem-05.gif',
        inventory: 20,
        colors: ["red", "maroon"],
    },
    {
        id: 3,
        name: 'Diachromal',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.',
        fullImagePath: './assets/gem-images/gem-09.gif',
        inventory: 0,
        colors: ["blue", "green", "red"],
    }];
}
