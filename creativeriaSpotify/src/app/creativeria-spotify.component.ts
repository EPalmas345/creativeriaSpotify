import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
@Component({
  moduleId: module.id,
  selector: 'creativeria-spotify-app',
  templateUrl: 'creativeria-spotify.component.html',
  styleUrls: ['creativeria-spotify.component.css'],
  directives:[NavbarComponent]
})
export class CreativeriaSpotifyAppComponent {
  title = 'creativeria-spotify works!';
}
