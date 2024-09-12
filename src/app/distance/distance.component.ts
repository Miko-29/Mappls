import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-distance',
  standalone: true,
  imports: [],
  templateUrl: './distance.component.html',
  styleUrl: './distance.component.css'
})
export class DistanceComponent {
  mapObject: any;
  mapplsClassObject = new mappls();
  mapplsPluginObject = new mappls_plugin();
  callback: any;
  mapProps = {
    center: [28.633, 77.2194],
    traffic: false,
    zoom: 4,
    geolocation: false,
    clickableIcons: false,
  };
  markerObject: any;

  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'vector',
      plugins: ['direction'],
    };

    this.mapplsClassObject.initialize(
      '4056949d-ea40-402f-a6d6-e533922e6d9a',
      loadObject,
      () => {
        this.mapObject = this.mapplsClassObject.Map({
          id: 'map',
          properties: this.mapProps,
        });

        this.mapObject.on('load', () => {
          var direction_option = {
            Resource: 'route_eta',
            annotations: 'nodes,congestion',
            map: this.mapObject,
            start: { label: 'Indira Gandhi Domestic Airport, Indira Gandhi International Airport, Thimayya Marg, New Delhi, Delhi, 110037', geoposition: 'KW8FBK' },
            end: { label: 'MapmyIndia Head Office New Delhi, 237, Okhla Industrial Estate Phase 3, Near Modi Mill, New Delhi, Delhi, 110020', geoposition: 'MMI000' },
          };
          this.mapplsPluginObject.direction(direction_option, (e: any) => {
            console.log(e);
          });
        });
      }
    );
  }
}