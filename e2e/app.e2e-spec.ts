import { Peer2Page } from './app.po';

describe('peer2 App', function() {
  let page: Peer2Page;

  beforeEach(() => {
    page = new Peer2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
