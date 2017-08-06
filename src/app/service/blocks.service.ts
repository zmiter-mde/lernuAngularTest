import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Block } from '../model/block.model';
import { Task } from '../model/task.model';

@Injectable()
export class BlocksService {

  url: string = 'https://zmiter-mde.github.io/lernuAngularTest/assets/json/rus.json';

  blocks: Block[];

  find() {
    return this.http
               .get(this.url)
               .map((res:Response) => {
                 let responseObject = res.json();
                 let blocks : Block[] = [];

                 for (let block of responseObject.blocks) {
                   block.level = responseObject.level;
                   blocks.push(Block.from(block));
                 }

                 this.blocks = blocks;

                 return {
                   level: responseObject.level,
                   blocks: blocks
                 };
               });
  }

  getBlockTasks(blockId: number) {
    let tasks: Task[] = [];

    for (let block of this.blocks) {
      if (blockId === block.id) {
        tasks = block.tasks;
      }
    }

    return tasks;
  }

  constructor(private http: Http) { }

}
