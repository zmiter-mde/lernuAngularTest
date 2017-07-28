import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../model/question.model';
import { Answer } from '../model/answer.model';

@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.component.html',
  styleUrls: ['./single-test.component.css']
})
export class SingleTestComponent implements OnInit {

  @Input('question')
  currentQuestion: Question;

  markAnswer(answer: Answer) {
    answer.marked = !answer.marked;
  }

  submit() {
    // TODO: send data to the server
    this.currentQuestion.submitted = true;
  }

  constructor() {

  }

  ngOnInit() {
  }

}
