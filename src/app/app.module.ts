import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <---Step 1 for allowing angular forms
import { PatternValidator } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GemComponent } from './gem/gem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AvatarService } from './avatar.service';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    CartComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <--Step 2
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AvatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
