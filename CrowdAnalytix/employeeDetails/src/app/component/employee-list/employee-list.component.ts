import { Component, OnInit } from '@angular/core';
import { Employee_TS } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  emp_array : Employee_TS[];
  pgNum : number =1;
  //declaring a variable of an array of contact type
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getAllEmployee()
    .subscribe(data => this.emp_array = data);
 }




 loadMore()
 {
   this.pgNum++;
   this.service.getAllEmployee(this.pgNum)
   .subscribe( data => this.emp_array= [...this.emp_array, ...data]);
   //spread all the values from employee array  and data, becomes anew array and that is assigned  to this.contacts

 }


 

}
