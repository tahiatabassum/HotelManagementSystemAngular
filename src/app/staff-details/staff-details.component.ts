import { Staff } from '../staff';
import { Component, OnInit, Input } from '@angular/core';
import { StaffService } from '../staff.service';
import { StaffListComponent } from '../staff-list/staff-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  id: string;
  staff: Staff;

  constructor(private route: ActivatedRoute,private router: Router,
    private staffService: StaffService) { }

  ngOnInit() {
    this.staff = new Staff();

    this.id = this.route.snapshot.params['id'];
    
    this.staffService.getStaff(this.id)
      .subscribe(data => {
        console.log(data)
        this.staff = data;
      }, error => {
        console.log(error)}
        );
  }

}
