import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../../gemmodel';

import { cartmodel } from '../../cartmodel';
import { cartitemmodel } from '../../cartitemmodel';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    
    @Input() gem: GemModel;
    @Input() cart: cartmodel;
    tab:number;
    
    setTab(selectedTab: number) {
        this.tab = selectedTab;
    }
    
  constructor() {
  }

  ngOnInit() {
      this.tab = 1;
  }

}
