import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../../gemmodel';

import { cartmodel } from '../../cartmodel';
import { cartitemmodel } from '../../cartitemmodel';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
    @Input() gem: GemModel;
    @Input() cart: cartmodel;
    
    
    addToCart() {        
        this.gem.inventory--;
        this.cart.totalquantity++;
        //if(this)
    }
    
  constructor() { }

  ngOnInit() {
      
  }

}
