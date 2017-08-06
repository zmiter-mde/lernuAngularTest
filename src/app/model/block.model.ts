import { Task } from './task.model';

export class Block {
  constructor (public id: number,
               public level: string,
               public title: string,
               public rule: string,
               public tasks: Task[]) {}

  public static from(obj) {
    let resultTasks = [];

    for (let task of obj.tasks) {
      resultTasks.push(Task.from(task));
    }

    return new Block(obj.id, obj.level, obj.title, obj.rule, resultTasks);
  }

}
