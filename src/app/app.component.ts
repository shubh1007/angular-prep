import { Component, Output, EventEmitter } from '@angular/core';
import { UserdataService } from './userdata.service';
import { UserAddressService } from './user-address.service';
import { Observable } from 'rxjs';
import { Employee } from './empInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(){

  }
  getData(){
    let companyEmp: Employee = {
      // Here no validation of the variables are done till now.
      // In email we can add number, string or any other data type.
      // Similarly in phone we can add string, number or any other data type.
      // name: 1234, throws an error.
      name: "Shubham",
      age: 22,
      email: "shubhsingtam10@gmail.com",
      phone: 9999999999
      // It also throws an error if we don't add the phone variable. To avoid this we can add ? after the variable name.
      // phone: 7098213317
    }
    return companyEmp;
  }

}
