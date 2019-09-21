import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee_TS } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp : Employee_TS = new Employee_TS();
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.service.getEmployeeDetails(101)
    .subscribe(data => this.emp = data);
      //reciving the data


      
    
  }
}
