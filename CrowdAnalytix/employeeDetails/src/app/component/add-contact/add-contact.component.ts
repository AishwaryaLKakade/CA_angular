import { Component, OnInit } from '@angular/core';
import { Employee_TS } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pb-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  emp : Employee_TS;

  constructor(private service : EmployeeService,
   private router : Router ) { }

  ngOnInit() {
    this.emp = new Employee_TS();
  }

  addEmployee()
  {
    this.service.addNewEmployee(this.emp)
    .subscribe( emp => {
      alert('Added a new employee with id : '+emp.id);
      this.router.navigate(['/all-employee', emp.id]);
    });

  }






}
