import { CreativeriaSpotifyPage } from './app.po';

describe('creativeria-spotify App', function() {
  let page: CreativeriaSpotifyPage;

  beforeEach(() => {
    page = new CreativeriaSpotifyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('creativeria-spotify works!');
  });
});
