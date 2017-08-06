import { Question } from './question.model';

export class Block {
  constructor (public id: number,
               public level: string,
               public title: string,
               public questions: Question[]) {}

  public static from(obj) {
    let resultQuestions = [];
    for (let question of obj.questions) {
      resultQuestions.push(Question.from(question));
    }
    return new Block(obj.id, obj.level, obj.title, resultQuestions);
  }
}
