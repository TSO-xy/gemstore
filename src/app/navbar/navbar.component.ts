import { Component, OnInit, Input } from '@angular/core';

import { cartmodel } from '../../cartmodel';
import { cartitemmodel } from '../../cartitemmodel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() cart: cartmodel;
    @Input() item: cartitemmodel;
    
    links = [{
		text: 'Home',
		href: '/Home',
	}, {
		text: 'Account',
		href: '/account',
	}, {
		//text: 'Cart',
		href: '/cart',
	}];


  constructor() { }

  ngOnInit() {
  }

}
