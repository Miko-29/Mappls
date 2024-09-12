import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  mapObject: any;
  mapplsClassObject: any = new mappls()
  mapplsPluginObject: any = new mappls_plugin()
  markerObject: any;
  callback: any;
  data: any;

  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'vector',
      plugins: ['search', 'pinMarker'],
    };

    this.mapplsClassObject.initialize(
      '4056949d-ea40-402f-a6d6-e533922e6d9a',
      loadObject,
      () => {
        //
        this.mapObject = this.mapplsClassObject.Map(
          {
            id: 'map',
            properties: {
              // center: [23.3441, 85.3096],
              zoomControl: true,
              location: true,
            },
          },
        )
        var optional_config = {
          location: [28.61, 77.23],
          region: 'IND',
          height: 300,
        };
        this.mapplsPluginObject.search(
          document.getElementById('auto'),
          optional_config,
          this.callback
        );

      }
    );

    this.callback = (data: any) => {
      console.log(data);
      if (this.markerObject) {
        this.markerObject.remove();
      }
      this.markerObject = this.mapplsPluginObject.pinMarker({
        map: this.mapObject,
        // fitbounds: true,
        pin: data[0].eLoc,
        // position: { lat: 23.317725, lng: 85.323597 },
        width: 25,
        height: 40,
        popupHtml: data[0].placeName + ", " + data[0].placeAddress,
        popupOptions: {
          openPopup: true
        },
      }, (data: any) => {
        this.markerObject = data;
        this.markerObject.fitbounds();
      });
      // this.markerObject.fitbounds();
    };
  }
}
