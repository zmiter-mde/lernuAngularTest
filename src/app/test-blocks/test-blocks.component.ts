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

  constructor(private blocksService: BlocksService) {
    this.blocksService.find().subscribe(
      result => {
        this.blocks = result;
        console.log(this.blocks);
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
