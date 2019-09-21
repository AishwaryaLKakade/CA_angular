import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  empForm : FormGroup;
  constructor(private activatedRoute : ActivatedRoute,
    private service : EmployeeService,
    private router : Router) { }

  ngOnInit() {
    //params is obbservable , by subscribe to it, and callback a params array
    this.activatedRoute.params.subscribe(  params=>{

      // console.log('got the id' , params['id'])
        this.service.getEmployeeDetails(params['id'])
           .subscribe( results=>
           {
             //console.log(results);
         this.empForm.setValue({...results});
        })
        
      });

      this.empForm = new FormGroup(
      {
          id :new FormControl(),
          name : new FormControl(),
          age : new FormControl(),
          department : new FormControl(),
          blood_group  : new FormControl(),
          address : new FormControl(),
          contact_number : new FormControl()
      });
  }


  saveChanges()
  {
    //calls the updateEmployee() from EmployeeService() 
    //values respresent the each of the keys that represent values of fields
    this.service.updateEmployee(this.empForm.value)
    .subscribe( results =>
      {
          this.router.navigate(['/emp-details',results.id])
      }
      )
  }

}
