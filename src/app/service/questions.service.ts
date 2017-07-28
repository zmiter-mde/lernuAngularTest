import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Question } from '../model/question.model';

@Injectable()
export class QuestionsService {

  url: string = 'https://zmiter-mde.github.io/lernuAngularTest/assets/json/rus.json';

  find() {
    return this.http
               .get(this.url)
               .map((res:Response) => {
                 return res.json().map((question) => {
                   return Question.from(question);
                 });
               });
  }

  constructor(private http: Http) { }

}
