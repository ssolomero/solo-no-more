import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FindYourTableComponent } from './find-your-table/find-your-table.component';
import { NavComponent } from './nav/nav.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CocktailComponent,
    DinnerComponent,
    FindYourTableComponent,
    NavComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
