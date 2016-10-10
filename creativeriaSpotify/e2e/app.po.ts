export class CreativeriaSpotifyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('creativeria-spotify-app h1')).getText();
  }
}
