import { SocialdemoPage } from './app.po';

describe('socialdemo App', () => {
  let page: SocialdemoPage;

  beforeEach(() => {
    page = new SocialdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
