import { Component, OnInit } from '@angular/core';

import { Block } from '../model/block.model';

import { BlocksService } from '../service/blocks.service';

@Component({
  selector: 'app-test-blocks',
  templateUrl: './test-blocks.component.html',
  styleUrls: ['./test-blocks.component.css']
})
export class TestBlocksComponent implements OnInit {

  blocks: Block[];
  level: string;

  constructor(private blocksService: BlocksService) {
    this.blocksService.find().subscribe(
      result => {
        this.level = result.level;
        this.blocks = result.blocks;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
