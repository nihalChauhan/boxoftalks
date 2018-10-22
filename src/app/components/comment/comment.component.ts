import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/models/IComment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;
  loggedIn: boolean;
  canDelete: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('delete') deleteComment: EventEmitter<number> = new EventEmitter<number>();
  constructor(private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
  }
  ngOnInit() {
    this.canDelete = false;
    if (this.loggedIn &&
        this.comment.author.username === JSON.parse(localStorage.getItem('user')).username) {
      this.canDelete = true;
    }
  }

  delete() {
    this.deleteComment.emit(this.comment.id);
  }
}
