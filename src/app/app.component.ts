import { Component } from '@angular/core';
import {} from '../assets/vendor/bootstrap/js/bootstrap.min.js';
import {} from '../assets/js/grayscale.min.js';
import {} from '../assets/vendor/jquery/jquery.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  loadedFeature = 'elements';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}

