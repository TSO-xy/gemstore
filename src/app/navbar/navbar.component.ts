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
    
    links = [{
		text: 'Home',
		href: '/Home',
	}, {
		text: 'Account',
		href: '/Account',
	}, {
		//text: 'Cart',
		href: '/Cart',
	}];


  constructor() { }

  ngOnInit() {
  }

}
