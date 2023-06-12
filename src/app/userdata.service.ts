import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  API_URL: string;
  constructor(private http: HttpClient) { 
    this.API_URL = "https://jsonplaceholder.typicode.com/users";
  }
  getUserData(){
    return this.http.get(this.API_URL);
  }
}