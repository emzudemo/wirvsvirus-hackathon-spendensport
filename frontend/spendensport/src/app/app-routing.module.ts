import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { DonationListComponent } from './donation-list/donation-list.component';


const routes: Routes = [
  { path: 'donations', component: DonationListComponent},
  { path: 'goals', component: GoalListComponent},
  { path: 'goal', component: GoalComponent},
  { path: '', redirectTo: 'goals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
