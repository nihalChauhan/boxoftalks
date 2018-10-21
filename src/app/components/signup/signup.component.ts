import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  constructor(private api: UserService, private router: Router) { }

  ngOnInit() {
  }

  signup(formValues) {
    this.api.registerUser(formValues.username, formValues.email, formValues.password)
      .subscribe(
        (data) => {
          this.api.saveUser(data);
          this.errorList = [];
          this.router.navigate(['']);
        },
        (error) => {
          this.errorList = [];
          const errors = error['error']['errors'];
          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              for (const errorMessage of errors[key]) {
                this.errorList.push(`${key} ${errorMessage}`);
              }
            }
          }
        }
    );
  }
}
