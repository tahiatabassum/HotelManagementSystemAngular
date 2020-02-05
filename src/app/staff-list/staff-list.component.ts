import { StaffDetailsComponent } from '../staff-details/staff-details.component';
import { Observable } from "rxjs";
import { StaffService } from "../staff.service";
import { Staff } from "../staff";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-staff-list",
  templateUrl: "./staff-list.component.html",
  styleUrls: ["./staff-list.component.css"]
})
export class StaffListComponent implements OnInit {
  staffs: Observable<Staff[]>;

  constructor(private staffService: StaffService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.staffs = this.staffService.getStaffsList();
    console.log(this.staffs);

  }

  deleteStaff(id: string) {
    this.staffService.deleteStaff(id)
      .subscribe(
        data => {
          console.log(data);
          console.log('preparing to call staff List');
          this.reloadData();
        },
        error => console.log(error));
  }
  staffDetails(id: string){
    console.log('The id is: ' + id);
    this.router.navigate(['details', id]);
  }


}