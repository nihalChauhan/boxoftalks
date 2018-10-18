import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPagination } from 'src/app/models/IPagination';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() pagination: IPagination;
  // tslint:disable-next-line:no-output-rename
  @Output('update') targetPage: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  changePage(target: number) {
    console.log(target);
    this.targetPage.emit(target);
  }
}
