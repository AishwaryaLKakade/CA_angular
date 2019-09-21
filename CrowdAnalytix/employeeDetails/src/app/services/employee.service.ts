import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee_TS } from '../models/employee';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000/employeeJSON/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {    
   constructor(private http : HttpClient){  }
   
   //returs a single contact object
   getEmployeeDetails(id:number):Observable<Employee_TS> {
   return this.http.get(baseUrl+id).map(data => data as Employee_TS);
   }
   //using map converting response objext to match the contact object

   addNewEmployee(emp : Employee_TS):Observable<Employee_TS>
   {
     return this.http.post(baseUrl, emp ).map( data => data as Employee_TS)
     //reciving a JS object and will be given to 
   }

   updateEmployee( emp : Employee_TS):Observable<Employee_TS>
   {
     return this.http.put(baseUrl + emp.id, emp).map( data => data as Employee_TS)
   }


  //  deletedEmployeeDetails(id:number):Observable<any> 
  //  {
  //   return this.http.delete(baseUrl+id);
  //  }

   getAllEmployee(pgNum : number= 1 ):Observable<Employee_TS[]>{
     let params = 
     {
       '_page'  : ''+pgNum
     }
     return this.http.get(baseUrl , {params}).map( resp => resp as Employee_TS[]);


   }



 

  

  


 
}
