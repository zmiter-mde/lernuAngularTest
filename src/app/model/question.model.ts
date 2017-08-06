import { Answer } from './answer.model';

export class Question {

  constructor(public answers: Answer[],
              public submitted: boolean) {
  }

  public static from(obj) {
    let resultAnswers = [];
    for (let plainAnswer of obj.answers) {
      plainAnswer.marked = false;
      resultAnswers.push(Answer.from(plainAnswer));
    }
    return new Question(resultAnswers, false);
  }
}
