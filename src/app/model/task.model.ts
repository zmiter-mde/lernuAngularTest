import { Answer } from './answer.model';

export class Task {

  constructor(public text: string,
              public answers: Answer[],
              public explanation: string,
              public submitted: boolean) {
  }

  public static from(obj) {
    let answers: Answer[] = [];

    for (let variant of obj.variants) {
      answers.push(Answer.from(variant));
    }

    return new Task(obj.text, answers, obj.explanation, false);
  }

}
