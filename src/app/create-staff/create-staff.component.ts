import { StaffService } from './../staff.service';
import { Staff } from './../staff';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  staff: Staff = new Staff();
  submitted = false;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }

  newStaff(): void {
    this.submitted = false;
    this.staff = new Staff();
  }

  save() {
    this.staffService.createStaff(this.staff)
      .subscribe(data => console.log(data), error => console.log(error));
    this.staff = new Staff();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}