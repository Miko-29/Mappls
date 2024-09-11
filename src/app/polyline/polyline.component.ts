import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';
import '../constant.ts'

@Component({
  selector: 'app-polyline',
  standalone: true,
  imports: [],
  templateUrl: './polyline.component.html',
  styleUrl: './polyline.component.css'
})
export class PolylineComponent {
  polylineData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [85.2000, 23.3441],
            [85.323597, 23.317725]
          ]
        },
        "properties": {
          "name": "Ranchi Airport to Ranchi High Court"
        }
      }
    ]
  };
  mapObject: any;
  mapplsClassObject: any = new mappls()
  mapplsPluginObject: any = new mappls_plugin()
  polylineObject: any;
  markerObject1: any;
  markerObject2: any;
  token = token;

  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'vector',
      libraries: ['airspacelayers'],
      // plugins: ['direction'],

    };

    this.mapplsClassObject.initialize(
      this.token, loadObject,
      () => {
        this.mapObject = this.mapplsClassObject.Map(
          {
            id: 'map',
            properties: {
              center: [23.3441, 85.3096],
              zoomControl: true,
              location: true,
              // zoom:
            },
          },
          // (data:any)=>{ this.mapObject = data ;  }

        )
        // console.log('map');
        this.polylineObject = this.mapplsClassObject.Polyline(
          {
            map: this.mapObject,
            path: this.polylineData,
            strokeColor: 'green',
          }
        );

        this.markerObject1 = this.mapplsClassObject.Marker({
          map: this.mapObject,
          position: { lat: 23.317725, lng: 85.323597 },
          popupHtml: 'Birsa Munda International Airport',
        });

        this.markerObject1 = this.mapplsClassObject.Marker({
          map: this.mapObject,
          position: { lat: 23.3441, lng: 85.2000 },
          popupHtml: 'Jharkhand High Court',
        });
      })
  }
}
