import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CreativeriaSpotifyAppComponent } from '../app/creativeria-spotify.component';

beforeEachProviders(() => [CreativeriaSpotifyAppComponent]);

describe('App: CreativeriaSpotify', () => {
  it('should create the app',
      inject([CreativeriaSpotifyAppComponent], (app: CreativeriaSpotifyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'creativeria-spotify works!\'',
      inject([CreativeriaSpotifyAppComponent], (app: CreativeriaSpotifyAppComponent) => {
    expect(app.title).toEqual('creativeria-spotify works!');
  }));
});
