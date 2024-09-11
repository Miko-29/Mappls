import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';
import '../constant.ts'

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
  marker: any;
  callback: any;
  data: any;
  token = token;

  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'vector',
      libraries: ['airspacelayers'],
      plugins: ['search'],
    };

    this.mapplsClassObject.initialize(
      this.token, loadObject,
      () => {
        var optional_config = {
          location: [28.61, 77.23],
          region: 'IND',
          height: 300,
        };
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
        );
        this.mapplsPluginObject.search(
          document.getElementById('auto'),
          optional_config,
          this.callback
        )

      });
    // this.mapplsClassObject.initialize("token",loadObject,
    //   () => {
    //     var optional_config = {
    //       location: [28.61, 77.23],
    //       region: 'IND',
    //       height: 300,
    //     };
    //     this.mapplsPluginObject.search(
    //       document.getElementById('auto'),
    //       optional_config,
    //       this.callback
    //     );
    //   }
    // );

    this.callback = (data: any) => {
      console.log(data);
    };
  }
}