import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mapObject: any;
  mapplsClassObject: any = new mappls()
  mapplsPluginObject: any = new mappls_plugin()
  title = 'mappls_assignment';
  markerObject: any;


  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'vector',
      libraries: ['airspacelayers'],
      plugins: ['direction'],

    };

    this.mapplsClassObject.initialize(
      '3977bfeea17933aaecdd1c90c171b587',
      loadObject,
      () => {
        this.mapObject = this.mapplsClassObject.Map(
          {
          id: 'map',
          properties: {
            center: [23.3441, 85.3096],
            zoomControl: true,
            location: true,
          },
        },
        // (data:any)=>{ this.mapObject = data ;  }
      );
      this.markerObject = this.mapplsClassObject.marker({
        map:  this.mapObject,
        position:{lat:23.35496, lng:85.3002},
        });
      }

    );
    
    
  }
}

// 23.35496, 85.3002