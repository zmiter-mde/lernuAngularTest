import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  url: string = 'http://localhost:4200/assets/json/rus.json';

  find() {
    return this.http
               .get(this.url)
               .map((res:Response) => res.json());
  }

  constructor(private http: Http) { }

}
