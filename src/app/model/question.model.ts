import { Answer } from './answer.model';

export class Question {

  constructor(public id: string,
              public level: string,
              public type: string,
              public question: string,
              public answers: Answer[],
              public submitted: boolean) {
  }

  public static from(obj) {
    let resultAnswers = [];
    for (let plainAnswer of obj.answers) {
      plainAnswer.marked = false;
      resultAnswers.push(Answer.from(plainAnswer));
    }
    return new Question(obj.id, obj.level, obj.type, obj.question, resultAnswers, false);
  }
}
