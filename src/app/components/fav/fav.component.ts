import { Component, OnInit, Input } from '@angular/core';
import { IFav } from 'src/app/models/IFav';
import { FavService } from './fav.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  @Input() fav: IFav;
  favStyle: string;
  loggedIn: boolean;
  constructor(private api: FavService, private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
  }

  ngOnInit() {
    this.favStyle = this.fav.favSwitch ? 'btn btn-outline-danger fav' : 'btn btn-outline-info fav';
  }

  toggleFav() {
    if (this.loggedIn) {
      if (this.fav.favSwitch) {
        this.api.delFav(this.fav.slug).subscribe(data => {
          this.fav.favCount--;
          this.fav.favSwitch = false;
          this.favStyle = 'btn btn-outline-info fav';
        });
      } else {
        this.api.addFav(this.fav.slug).subscribe(data => {
          this.fav.favCount++;
          this.fav.favSwitch = true;
          this.favStyle = 'btn btn-outline-danger fav';
        });
      }
    }
  }
}
