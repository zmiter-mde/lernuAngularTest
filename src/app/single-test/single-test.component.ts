import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../service/questions.service';

import { Question } from '../model/question.model';
import { Answer } from '../model/answer.model';

@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.component.html',
  styleUrls: ['./single-test.component.css']
})
export class SingleTestComponent implements OnInit {

  questions: Question[] = [];
  currentQuestion: Question = new Question(null, null, null, null, null);

  markAnswer(answer: Answer) {
    answer.marked = !answer.marked;
    console.log('Mark answer called');
  }

  constructor(private questionsService: QuestionsService) {
    this.questionsService.find().subscribe(
      result => {
        this.questions = result;
        this.currentQuestion = this.questions[0];
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
