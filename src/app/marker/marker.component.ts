import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-marker',
  standalone: true,
  imports: [],
  templateUrl: './marker.component.html',
  styleUrl: './marker.component.css'
})
export class MarkerComponent {
  mapObject: any;
  mapplsClassObject: any = new mappls()
  mapplsPluginObject: any = new mappls_plugin()
  markerObject: any;
  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'vector',
      libraries: ['airspacelayers'],
      // plugins: ['direction'],

    };

    this.mapplsClassObject.initialize(
      '26015c82-2358-4290-8524-308641204004', loadObject,
      () => {
        this.mapObject = this.mapplsClassObject.Map(
          {
            id: 'map',
            properties: {
              center: [23.3441, 85.3096],
              zoomControl: true,
              location: true,
              // zoom:22
            },
          },
          // (data:any)=>{ this.mapObject = data ;  }

        )
        // console.log('map');

        this.mapObject.on("load", () => {
          this.markerObject = this.mapplsClassObject.Marker({
            map: this.mapObject,
            position: { lat: 23.317725, lng: 85.323597 },
            // width: 25,
            // height: 40,
            popupHtml: "<p>Birsa Munda International Airport</p>"
          });
          // console.log('marker');
        });
      })
  }

}
