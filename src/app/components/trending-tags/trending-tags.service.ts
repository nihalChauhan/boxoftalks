import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingTagsService {
  constructor(private http: HttpClient) { }

  public getTrendingTags() {
    return this.http.get(environment.apiUrl + '/tags');
  }
}
