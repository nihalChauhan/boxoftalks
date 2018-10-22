import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IArticle } from '../../models/IArticle';
import { EditArticleService } from './edit-article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleData: IArticle;
  articleForm: FormGroup = null;
  errorList: string[];
  formValuesFetched = false;
  constructor(private api: EditArticleService, private router: Router, private route: ActivatedRoute, formBuilder: FormBuilder) {
    this.articleForm = formBuilder.group({
      title: null,
      description: null,
      body: null
    });
  }

  ngOnInit() {
    this.api.getArticle(this.route.snapshot.queryParams['slug'])
      .subscribe(
        (data) => {
          this.articleData = data['article'];
        },
        (error) => this.router.navigate(['/404']),
        () => {
          const title = new FormControl(this.articleData.title);
          const description = new FormControl(this.articleData.description);
          const body = new FormControl(this.articleData.body);
          this.articleForm = new FormGroup({
            title,
            description,
            body
          });
          this.formValuesFetched = true;
        }
      );
  }

  updateArticle(formValues) {
    this.api.updateArticle(formValues.title, formValues.description, formValues.body, this.articleData.slug)
      .subscribe(
      (data) => {
        this.router.navigate(['/article'], {queryParams : { slug: this.articleData.slug }});
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
