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
      '3977bfeea17933aaecdd1c90c171b587', loadObject,
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
            popupHtml: "<style>::-webkit-scrollbar {width: 10px;} </style><div style=\"max-height:150px;min-width:200px;overflow-y: scroll;\">" +
            "<img style=\"width: 200px;height: 100px;\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Panorama_of_Birsa_Munda_Airport.jpg/230px-Panorama_of_Birsa_Munda_Airport.jpg\">"+
            "<p>Birsa Munda International Airport</p>" +
            "<a href=\"https://www.mappls.com\">Mappls Maps</a></div>",
            popupOptions:
            {
              openPopup: true,
              autoClose: true,
            }
          });
          // console.log('marker');
        });
      })
  }

}
