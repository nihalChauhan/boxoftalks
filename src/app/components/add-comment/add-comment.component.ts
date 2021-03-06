import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AddCommentService } from './add-comment.service';
import { UserService } from '../../services/user.service'; 

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() slug: string;
  errorList: string[];
  loggedIn: boolean;

  // tslint:disable-next-line:no-output-rename
  @Output('update') commentUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private api: AddCommentService, private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
  }

  ngOnInit() {
  }

  postComment(formValues) {
    this.api.postComment(formValues.usercomment, this.slug)
      .subscribe(
        (data) => {
          (<HTMLInputElement>document.getElementById('usercomment')).value = '';
          this.commentUpdate.emit(true);
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
