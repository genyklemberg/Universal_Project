import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/src/ng4-twitter-timeline.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './routes/routes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElementsComponent } from './elements/elements.component';
import { ItemsListComponent } from './elements/items-list/items-list.component';
import { DetailsComponent } from './elements/details/details.component';
import { ItemComponent } from './elements/items-list/item/item.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyCartEditComponent } from './my-cart/my-cart-edit/my-cart-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './gaming/teams/teams.component';
import { TwitterComponent } from './shared/twitter/twitter.component';
import {TeamsService} from './services/teams.service';

import { config } from './config/firebase.config';
import { FbLikeBtnComponent } from './shared/fb-like-btn/fb-like-btn.component';

const firebaseConfig = config;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElementsComponent,
    ItemsListComponent,
    DetailsComponent,
    ItemComponent,
    MyCartComponent,
    MyCartEditComponent,
    DropdownDirective,
    HomeComponent,
    TeamsComponent,
    TwitterComponent,
    FbLikeBtnComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngLanding'}),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng4TwitterTimelineModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
