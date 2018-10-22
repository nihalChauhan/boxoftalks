import { Component, OnInit } from '@angular/core';
import { TrendingTagsService } from './trending-tags.service';

@Component({
  selector: 'app-trending-tags',
  templateUrl: './trending-tags.component.html',
  styleUrls: ['./trending-tags.component.css']
})
export class TrendingTagsComponent implements OnInit {
  tags: string[];
  constructor(private api: TrendingTagsService) {
  }

  ngOnInit() {
    this.api.getTrendingTags().subscribe(data => {
      this.tags = data['tags'];
    });
  }

}
