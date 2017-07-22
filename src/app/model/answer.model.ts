export class Answer {

  constructor(public id: number,
              public explanation: string,
              public text: string,
              public truth: boolean,
              public marked: boolean) {
  }
}
