import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TagService {

  private prefix = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTags(): Observable<String[]> {
    return this.http.get<String[]>(this.prefix + '/tagList');
  }
}
