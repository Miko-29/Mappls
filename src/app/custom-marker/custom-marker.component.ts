import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-custom-marker',
  standalone: true,
  imports: [],
  templateUrl: './custom-marker.component.html',
  styleUrl: './custom-marker.component.css'
})
export class CustomMarkerComponent {
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
            icon: 'https://apis.mapmyindia.com/map_v3/2.png',
            popupHtml: "<style>::-webkit-scrollbar {width: 10px;} </style><div style=\"max-height:150px;min-width:200px;overflow-y: scroll;\">" +
              "<img style=\"width: 200px;height: 100px;\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Panorama_of_Birsa_Munda_Airport.jpg/230px-Panorama_of_Birsa_Munda_Airport.jpg\">" +
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