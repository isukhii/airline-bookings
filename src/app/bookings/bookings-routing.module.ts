import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookingsComponent } from './components/new-bookings/new-bookings.component';


const routes: Routes = [
  {
    path: '',
    component: NewBookingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
