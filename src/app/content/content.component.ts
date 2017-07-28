import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../service/questions.service';

import { Question } from '../model/question.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  questions: Question[];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.find().subscribe(
      result => {
        this.questions = result;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
