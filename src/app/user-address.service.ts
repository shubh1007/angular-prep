import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {

  constructor(private http: HttpClient ) { }

  getData(){
    let API_URL = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(API_URL);
  }
}
