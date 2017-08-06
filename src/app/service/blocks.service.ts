import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Block } from '../model/block.model';

@Injectable()
export class BlocksService {

  url: string = 'https://zmiter-mde.github.io/lernuAngularTest/assets/json/rus.json';

  find() {
    return this.http
               .get(this.url)
               .map((res:Response) => {
                 let responseObject = res.json();
                 let blocks : Block[] = [];

                 for (let block of responseObject.blocks) {
                   blocks.push(Block.from(block));
                 }

                 return {
                   level: responseObject.level,
                   blocks: blocks
                 };
               });
  }

  constructor(private http: Http) { }

}
