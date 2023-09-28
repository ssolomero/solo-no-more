import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FindYourTableComponent } from './find-your-table/find-your-table.component';
import { NavComponent } from './nav/nav.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CeremonyComponent } from './ceremony/ceremony.component';

const routes: Routes = [
  { path: 'ceremony', component: CeremonyComponent },
  { path: 'cocktail', component: CocktailComponent},
  { path: 'menu', component: DinnerComponent},
  { path: 'seating-chart', component: FindYourTableComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path:'', component: NavComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
