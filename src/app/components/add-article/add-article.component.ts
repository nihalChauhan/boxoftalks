import { Component, OnInit } from '@angular/core';
import { AddArticleService } from './add-article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  constructor(private api: AddArticleService, private router: Router) { }

  ngOnInit() {
  }

  postArticle(formValues) {
    this.api.addArticle(formValues.title, formValues.description, formValues.body, formValues.tags)
      .subscribe(
        (data) => {
          this.errorList = [];
          this.router.navigate(['article'], {queryParams: {slug: data['article'].slug}});
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
