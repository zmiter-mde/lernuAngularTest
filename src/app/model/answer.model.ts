export class Answer {

  constructor(public id: number,
              public explanation: string,
              public text: string,
              public truth: boolean,
              public marked: boolean) {
  }

  public static from(obj) {
    return new Answer(obj.id, obj.explanation, obj.text, obj.truth, obj.marked);
  }

}
