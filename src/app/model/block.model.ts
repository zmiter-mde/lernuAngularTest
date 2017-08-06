import { Task } from './task.model';

export class Block {
  constructor (public id: number,
               public level: string,
               public title: string,
               public rule: string,
               public tasks: Task[]) {}

  public static from(obj) {
    let resultQuestions = [];
    /*
    for (let question of obj.questions) {
      resultQuestions.push(Task.from(question));
    }
    */
    return new Block(obj.id, obj.level, obj.title, obj.rule, resultQuestions);
  }

}
