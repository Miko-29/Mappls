- [Section 1](#section-1)
    - [How to integrate Mappls SDKs?](#how-to-integrate-mappls-sdks)
    - [How does it initialize Mappls SDKs?](#how-does-it-initialize-mappls-sdks)
    - [How to show a popup on click of Map Marker?](#how-to-show-a-popup-on-click-of-map-marker)
- [Section 2](#section-2)
    - [How to show Mappls Map?](#how-to-show-mappls-map)
    - [How to set zoom level and center of Map?](#how-to-set-zoom-level-and-center-of-map)
    - [How to plot a marker on Mappls Map?](#how-to-plot-a-marker-on-mappls-map)
    - [Add a custom marker and when we click on the marker then display an InfoWindow/pop-up.](#add-a-custom-marker-and-when-we-click-on-the-marker-then-display-an-infowindowpop-up)
    - [Add 50 custom markers and when we click on a particular marker, the marker should be highlighted](#add-50-custom-markers-and-when-we-click-on-a-particular-marker-the-marker-should-be-highlighted)
    - [How to plot a polyline on Mappls Map?](#how-to-plot-a-polyline-on-mappls-map)
    - [How to plot a polyline with custom color on Mappls Map?](#how-to-plot-a-polyline-with-custom-color-on-mappls-map)
- [Section 3](#section-3)

## Section 1: 

### How to integrate Mappls SDKs?
* Install mappls sdk 
    ```
    npm  i  mappls-web-maps
    ```

### How does it initialize Mappls SDKs?
* Import mappls package into the component where map needs to be rendered
    ```typescript
    import { mappls, mappls_plugin } from 'mappls-web-maps';
    ```
* Declare variables and call the initialize function to initialize the map
    ```typescript
    mapObject: any;
    mapplsClassObject: any = new mappls()
    mapplsPluginObject: any = new mappls_plugin()

    ngOnInit() {
        const loadObject = {
            map: true,
            layer: 'vector',
            libraries: ['airspacelayers'],
        };
        this.mapplsClassObject.initialize('<token>', loadObject,
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
            )
        })
      }

    ```

### How to show a popup on click of Map Marker?
* After intializing the map, add a marker when map has been loaded.Give the coordinates where you want to place marker as `position`. Define the popup's html code as the `popupHtml`
    ```typescript
    markerObject: any;    
    this.mapplsClassObject.initialize('<token>', loadObject,
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
        )
        this.mapObject.on("load", () => {
            this.markerObject = this.mapplsClassObject.Marker({
                map: this.mapObject,
                position: { lat: 23.317725, lng: 85.323597 },
                popupHtml: "<p>Birsa Munda International Airport</p>"
            });
        });
    });
    ```
* Add a div with id "map" in the html template to render the map
    ```html
    <div id="map"></div>
    ```

![marker_popup](./screenshots/marker_popup.png)

---

## Section 2: 

### How to show Mappls Map?
* Import mappls package into the component where map needs to be rendered
    ```typescript
    import { mappls, mappls_plugin } from 'mappls-web-maps';
    ```
* Declare variables and call the initialize function to initialize the map. Inside initialize function call Map function passing json including the html id, properties, etc as parameter.
    ```typescript
    mapObject: any;
    mapplsClassObject: any = new mappls()
    mapplsPluginObject: any = new mappls_plugin()

    ngOnInit() {
        const loadObject = {
            map: true,
            layer: 'vector',
            libraries: ['airspacelayers'],
        };
        this.mapplsClassObject.initialize('<token>', loadObject,
        () => {
            this.mapObject = this.mapplsClassObject.Map(
            {
                id: 'map',
                properties: {
                    zoomControl: true,
                    location: true,
                },
            },
            )
        })
      }

    ```
* Add a div with id "map" in the html template to render the map
    ```html
    <div id="map"></div>
    ```
![map](./screenshots/map.png)

### How to set zoom level and center of Map?
* Inside properties give the center coordinates as `center` and zoom level as `zoom`.
    ```typescript
    mapObject: any;
    mapplsClassObject: any = new mappls()
    mapplsPluginObject: any = new mappls_plugin()

    ngOnInit() {
        const loadObject = {
            map: true,
            layer: 'vector',
            libraries: ['airspacelayers'],
        };
        this.mapplsClassObject.initialize('<token>', loadObject,
        () => {
            this.mapObject = this.mapplsClassObject.Map(
            {
                id: 'map',
                properties: {
                    center: [23.3441, 85.3096],
                    zoomControl: true,
                    location: true,
                    zoom:
                },
            },
            )
        })
      }

    ```
![center_zoom](./screenshots/center_zoom.png)

### How to plot a marker on Mappls Map?
* Add a marker when map has been loaded by calling the `Marker` function. Give the coordinates where you want to place marker as `position`.
    ```typescript
    markerObject: any;    
    this.mapplsClassObject.initialize('<token>', loadObject,
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
        )
        this.mapObject.on("load", () => {
            this.markerObject = this.mapplsClassObject.Marker({
                map: this.mapObject,
                position: { lat: 23.317725, lng: 85.323597 },
                popupHtml: "<p>Birsa Munda International Airport</p>"
            });
        });
    });
    ```
![marker](./screenshots/marker.png)

### Add a custom marker and when we click on the marker then display an InfoWindow/pop-up.
* Add a marker when map has been loaded. Give the coordinates where you want to place marker as `position`.Give the path/url of marker icon as `icon` to set a custom marker. Define the popup's html code as the `popupHtml`
    ```typescript
    this.mapObject.on("load", () => {
        this.markerObject = this.mapplsClassObject.Marker({
            map: this.mapObject,
            icon:  'https://apis.mapmyindia.com/map_v3/2.png',
            position: { lat: 23.317725, lng: 85.323597 },
            popupHtml: "<style>::-webkit-scrollbar {width: 10px;} </style><div style=\"max-height:150px;min-width:200px;overflow-y: scroll;\">" +
            "<img style=\"width: 200px;height: 100px;\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Panorama_of_Birsa_Munda_Airport.jpg/230px-Panorama_of_Birsa_Munda_Airport.jpg\">"+
            "<p>Birsa Munda International Airport</p>" +
            "<a href=\"https://www.mappls.com\">Mappls Maps</a></div>",
        });
    });
    ```
![custom_marker](./screenshots/custom_marker.png)
![custom_popup](./screenshots/custom_popup.png)

### Add 50 custom markers and when we click on a particular marker, the marker should be highlighted
* Add a variable with geojson of the points to be plotted
    ```typescript
      airportsGeojson = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                8.4819569,
                76.9196331
              ]
            },
            "properties": {
              "name": "Thiruvananthapuram International Airport",
              "name_en": "Thiruvananthapuram International Airport",
              "name_fr": null,
                }
          }
        ]
      };
    ```
* Add this variable as `position` of marker
    ```typescript
    this.mapObject.on("load", () => {
        this.markerObject = this.mapplsClassObject.Marker({
            map: this.mapObject,
            position: this.airportsGeojson,
            width: 6,
            height: 8,
            icon: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plane-512.png',
            clusters: true,
            fitbounds: true,
        });
       });
    ```
![airports](./screenshots/airports.png)

### How to plot a polyline on Mappls Map?
* Declare a variable containing polyline data.
    ```typescript
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
    ```
* Add polyline using `Polyline` function and define polyline coordinates as `path`
    ```typescript
    this.polylineObject = this.mapplsClassObject.Polyline(
        {
            map: this.mapObject,
            path: this.polylineData,
        }
    );
    ```
![polyline](./screenshots/polyline.png)

### How to plot a polyline with custom color on Mappls Map?
* Set color using `strokeColor` 
    ```typescript
    this.polylineObject = this.mapplsClassObject.Polyline(
        {
            map: this.mapObject,
            path: this.polylineData,
            strokeColor:  'green',
        }
    );
    ```
![polyline_color](./screenshots/polyline_color.png)

### How to plot a polygon on Mappls Map?
* Add polygon using `Polygon` function and define polygon coordinates as `paths`
    ```typescript
    this.polygonObject = this.mapplsClassObject.Polygon(
        {
            map: this.mapObject,
            paths: [
                {
                "lng": 83.49816893219469, "lat": 24.52705948102653
                },
                {
                "lng": 83.54244234437463, "lat": 24.5261803947958
                },
                {
                "lng": 83.60015868279078, "lat": 24.513240765593967
                },
                {
                "lng": 83.68245698049178, "lat": 24.51558118890164
                },
            ]
        }
    );
    ```
![polygon](./screenshots/polygon.png)

### How to plot a polygon with custom color?
*   Set fill color using `fillColor` and border color using `strokeColor`
    ```typescript
    this.polygonObject = this.mapplsClassObject.Polygon(
        {
            map: this.mapObject,
            paths: [
                {
                "lng": 83.49816893219469, "lat": 24.52705948102653
                },
                {
                "lng": 83.54244234437463, "lat": 24.5261803947958
                },
                {
                "lng": 83.60015868279078, "lat": 24.513240765593967
                },
                {
                "lng": 83.68245698049178, "lat": 24.51558118890164
                },
            ],
            fillColor: "brown",
            strokeColor: "brown",
        }
    );
    ```

### How to plot a polygon with opacity?
*   Set fill opacity using `fillOpacity` and border opacity using `strokeOpacity`
    ```typescript
    this.polygonObject = this.mapplsClassObject.Polygon(
        {
            map: this.mapObject,
            paths: [
                {
                "lng": 83.49816893219469, "lat": 24.52705948102653
                },
                {
                "lng": 83.54244234437463, "lat": 24.5261803947958
                },
                {
                "lng": 83.60015868279078, "lat": 24.513240765593967
                },
                {
                "lng": 83.68245698049178, "lat": 24.51558118890164
                },
            ],
            fillColor: "brown",
            fillOpacity: 0.5,
            strokeColor: "brown",
            strokeOpacity: 1,
        }
    );
    ```
![polygon_color](./screenshots/polygon_color.png)

### How to show a custom popup on click of Map Marker?
* Add a marker when map has been loaded. Give the coordinates where you want to place marker as `position`.Give the path/url of marker icon as `icon` to set a custom marker. Define the popup's html code as the `popupHtml`
    ```typescript
    this.mapObject.on("load", () => {
        this.markerObject = this.mapplsClassObject.Marker({
            map: this.mapObject,
            icon:  'https://apis.mapmyindia.com/map_v3/2.png',
            position: { lat: 23.317725, lng: 85.323597 },
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
    });
    ```
![custom_popup](./screenshots/custom_popup.png)

---

## Section 3: 

### How to get human readable address information at a location/coordinate?
### How to get details of a place by its name?
### How to get road distance between two locations?
### How to get nearby places from a location of some specific category?
### How to get an image of a map with markers?
