import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'staff', pathMatch: 'full' },
  { path: 'staffs', component: StaffListComponent },
  { path: 'add', component: CreateStaffComponent },
  { path: 'details/:id', component: StaffDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }