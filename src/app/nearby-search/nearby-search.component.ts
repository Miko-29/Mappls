import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-nearby-search',
  standalone: true,
  imports: [],
  templateUrl: './nearby-search.component.html',
  styleUrl: './nearby-search.component.css'
})
export class NearbySearchComponent {
  mapObject: any;
  mapplsClassObject = new mappls();
  mapplsPluginObject = new mappls_plugin();
  marker: any;

  mapProps = {
    center: [28.633, 77.2194],
    traffic: false,
    zoom: 4,
    geolocation: false,
    clickableIcons: false,
  };

  ngOnInit() {
    const loadObject = {
      map: true,
      plugins: ['nearby'],
    };

    this.mapplsClassObject.initialize(
      '1fab5219-3f71-4f78-a3a8-2e973efba498',
      loadObject,
      () => {
        this.mapObject = this.mapplsClassObject.Map(
          {
            id: 'map',
            properties: {
              center: [28.632735, 77.219696],
              zoomControl: true,
              location: true,
              zoom: 17
            },
          },
        )
        var options = {
          divId: 'nearby_search',
          keywords: 'atm',
          refLocation: '28.632735,77.219696',
          fitbounds: true,
          icon: {
            url: 'https://apis.mappls.com/map_v3/1.png',
          },
          click_callback: function (d: any) {
            if (d) {
              var l =
                'Name: ' +
                d.placeName +
                '\nAddress: ' +
                d.placeAddress +
                '\neLoc: ' +
                d.eLoc;
              alert(l);
            }
          },
        };
        this.mapplsPluginObject.nearby(options, (data: any) => {
          let nr = data;
          console.log(nr);
          for (let point of nr.data) {
            this.marker = this.mapplsPluginObject.pinMarker({
              map: this.mapObject,
              pin: point.eLoc,
              popupHtml: point.placeName + ", " + point.placeAddress,
            })
          }
        });
      }
    );
  }
}
