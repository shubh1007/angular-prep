import { Component, Output, EventEmitter } from '@angular/core';
import { UserdataService } from './userdata.service';
import { UserAddressService } from './user-address.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  userData: any = [];
  userAddress: any = [];
  constructor(
    private userDataService: UserdataService,
    private userAddressService: UserAddressService
    ){
      this.userDataService.getUserData().subscribe(data=>{
      this.userData = data;
    })
      this.userAddressService.getData().subscribe(data=>{
      this.userAddress = data;
    })
    
  }


  // chats = ["Child to Parent"];
  // parentToChild(){
  //   console.log("Changes");
  //   // this.chats.push(chat);
  // }
  // addChats(chat: string){
  //   this.chats.push(chat);
  //   console.log(this.chats);
  // }

  // currentBeverage = "coffee"; 
  // name = "Shubham";
  // beverages = ["tea", "coffee", "milk"];
  // addBeverage(newBeverage: string){
  //   this.beverages.push(newBeverage);
  // }
}
