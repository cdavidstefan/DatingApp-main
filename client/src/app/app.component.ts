import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // layout suggestion inside the class: properties at the top, followed by the constructor, followed by any used methods.
  // CORS is a browser security feature. cross origin resource sharing.
  // users: any - turns typescript safety off. like declaring a variable in JS.
  
  title = 'Dating App!';
  
  constructor(private accountService: AccountService) {}
  
  ngOnInit(): void {
    this.setCurrentUser();
  }



  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

}