import { Component, Output, EventEmitter } from '@angular/core';
import { UserdataService } from './userdata.service';
import { UserAddressService } from './user-address.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData$:Observable<any>;
  constructor(
    private userDataService: UserdataService
  ){
    this.userData$ = this.userDataService.getUserData();
  }
}
