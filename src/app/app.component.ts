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
  title = 'my-app';
  userData$:Observable<any>;
  // userData: any = [];
  // userAddress: any = [];
  constructor(
    // How this is dependency injection?
    // We are injecting the service in the constructor
    // and then we are using it in the constructor
    // Here, we are injecting the service in the constructor 
    // (UserDataService is the service which we are injecting)
    private userDataService: UserdataService,
    private userAddressService: UserAddressService
    ){
      // this is the way to get the data from the service
      let userRecord = this.userDataService.getUserData();
      // userData$ is an Observable and will store the data (userRecord).
      this.userData$ = userRecord;
      console.log(this.userData$);
    //   this.userDataService.getUserData().subscribe(data=>{
    //   this.userData = data;
    // })
    //   this.userAddressService.getData().subscribe(data=>{
    //   this.userAddress = data;
    // })
    
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
