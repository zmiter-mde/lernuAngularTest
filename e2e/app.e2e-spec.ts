import { LernuAngularTestPage } from './app.po';

describe('lernu-angular-test App', () => {
  let page: LernuAngularTestPage;

  beforeEach(() => {
    page = new LernuAngularTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
