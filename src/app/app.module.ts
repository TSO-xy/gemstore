import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <---Step 1 for allowing angular forms
import { PatternValidator } from '@angular/forms';


import { AppComponent } from './app.component';
import { GemComponent } from './gem/gem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AvatarService } from './avatar.service';


@NgModule({
  declarations: [
    AppComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // <--Step 2
  ],
  providers: [AvatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
