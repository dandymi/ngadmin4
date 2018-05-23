import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Question } from '../model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionService {

  private prefix = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.prefix + '/questions');
  }

}
