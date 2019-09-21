import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee-details/employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';


const routes : Routes =[
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'all-employee'
  },
  {
    path : 'all-employee',
    component : EmployeeListComponent
  },
  {
    path : 'emp-details',
    component : EmployeeComponent
  },
  {
    path : 'add-employee',
    component :  AddContactComponent
  },
  {
    path : 'edit-employee/:id',
    component :  EditEmployeeComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,    
    SidebarComponent,    
    AddContactComponent, 
    EditEmployeeComponent,    
  
 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
