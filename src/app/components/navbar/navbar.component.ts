import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  constructor(private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logoutUser();
  }
}
