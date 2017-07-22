import { Answer } from './answer.model';

export class Question {

  constructor(public id: string,
              public level: string,
              public type: string,
              public question: string,
              public answers: Answer[]) {
  }
}
