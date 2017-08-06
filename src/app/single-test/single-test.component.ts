import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { Task } from '../model/task.model';
import { Answer } from '../model/answer.model';
import { Block } from '../model/block.model';

import { BlocksService } from '../service/blocks.service';

@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.component.html',
  styleUrls: ['./single-test.component.css']
})
export class SingleTestComponent implements OnInit {

  currentTask: Task;
  taskIndex: number;

  tasks: Task[];

  markAnswer(answer: Answer) {
    answer.marked = !answer.marked;
  }

  getOption(text: string, option: string) {
    return text.replace('..', option);
  }

  goToLevelledBlocks() {
    this.router.navigate(['/dashboard']);
  }

  submit() {
    // TODO: send data to the server
    this.currentTask.submitted = true;
  }

  next() {
    if (this.nextAvailable()) {
      this.currentTask = this.tasks[++this.taskIndex];
    }
  }

  nextAvailable() {
    return this.taskIndex < this.tasks.length - 1;
  }

  constructor(private blocksService: BlocksService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.tasks = this.blocksService.getBlockTasks(+params['blockId']);
       this.taskIndex = 0;
       this.currentTask = this.tasks[this.taskIndex];
    });
  }

}
