import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Block } from '../model/block.model';

@Injectable()
export class BlocksService {

  url: string = 'https://zmiter-mde.github.io/lernuAngularTest/assets/json/rus.json';

  find() {
    return this.http
               .get(this.url)
               .map((res:Response) => {
                 return res.json().map((block) => {
                   return Block.from(block);
                 });
               });
  }

  constructor(private http: Http) { }

}
