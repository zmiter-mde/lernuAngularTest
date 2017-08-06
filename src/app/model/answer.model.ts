export class Answer {

  constructor(public value: string,
              public truth: boolean,
              public marked: boolean) {
  }

  public static from(obj) {
    return new Answer(obj.option, obj.truth, false);
  }

}
