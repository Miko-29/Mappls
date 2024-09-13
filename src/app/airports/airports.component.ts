import { Component } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [],
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.css'
})
export class AirportsComponent {
  mapObject: any;
  mapplsClassObject: any = new mappls()
  mapplsPluginObject: any = new mappls_plugin()
  markerObject: any;
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
          "iata": "TRV",
          "icao": "VOTV",
          "wikipedia": "en:Trivandrum International Airport",
          "wikidata": "Q1466205",
          "website": "https:\/\/www.adani.com\/thiruvananthapuram-airport",
          "phone": null,
          "operator": null,
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=22826670",
          "source": null,
          "other_tags": "{\"aerodrome:type\": \"international\", \"aeroway\": \"aerodrome\", \"int_name\": \"Trivandrum Airport\", \"name:ar\": \"\\u0645\\u0637\\u0627\\u0631 \\u062b\\u064a\\u0631\\u0648\\u0641\\u0627\\u0646\\u0627\\u0646\\u062b\\u0627\\u0628\\u0648\\u0631\\u0627\\u0645 \\u0627\\u0644\\u062f\\u0648\\u0644\\u064a\", \"name:he\": \"\\u05e9\\u05d3\\u05d4 \\u05ea\\u05e2\\u05d5\\u05e4\\u05d4 \\u05d1\\u05d9\\u05e0\\u05dc\\u05d0\\u05d5\\u05de\\u05d9 \\u05ea\\u05d9\\u05e8\\u05d5\\u05d0\\u05d5\\u05d5\\u05e0\\u05ea\\u05d0\\u05e0\\u05d8\\u05e4\\u05d5\\u05e8\\u05dd\", \"name:hi\": \"\\u0924\\u093f\\u0930\\u0941\\u0935\\u0928\\u0902\\u0924\\u092a\\u0941\\u0930\\u092e \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0915\\u094d\\u0937\\u0947\\u0924\\u094d\\u0930\", \"name:kn\": \"\\u0ca4\\u0cbf\\u0cb0\\u0cc1\\u0cb5\\u0ca8\\u0c82\\u0ca4\\u0caa\\u0cc1\\u0cb0\\u0c82 \\u0c85\\u0c82\\u0ca4\\u0cb0\\u0cbe\\u0cb7\\u0ccd\\u0c9f\\u0ccd\\u0cb0\\u0cc0\\u0caf \\u0cb5\\u0cbf\\u0cae\\u0cbe\\u0ca8 \\u0ca8\\u0cbf\\u0cb2\\u0ccd\\u0ca6\\u0cbe\\u0ca3\", \"name:ml\": \"\\u0d24\\u0d3f\\u0d30\\u0d41\\u0d35\\u0d28\\u0d28\\u0d4d\\u0d24\\u0d2a\\u0d41\\u0d30\\u0d02 \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d3e\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30 \\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:ru\": \"\\u041c\\u0435\\u0436\\u0434\\u0443\\u043d\\u0430\\u0440\\u043e\\u0434\\u043d\\u044b\\u0439 \\u0430\\u044d\\u0440\\u043e\\u043f\\u043e\\u0440\\u0442 \\u0422\\u0440\\u0438\\u0432\\u0430\\u043d\\u0434\\u0440\\u0430\\u043c\", \"name:ta\": \"\\u0ba4\\u0bbf\\u0bb0\\u0bc1\\u0bb5\\u0ba9\\u0ba8\\u0bcd\\u0ba4\\u0baa\\u0bc1\\u0bb0\\u0bae\\u0bcd \\u0baa\\u0ba9\\u0bcd\\u0ba9\\u0bbe\\u0b9f\\u0bcd\\u0b9f\\u0bc1 \\u0bb5\\u0bbe\\u0ba9\\u0bc2\\u0bb0\\u0bcd\\u0ba4\\u0bbf \\u0ba8\\u0bbf\\u0bb2\\u0bc8\\u0baf\\u0bae\\u0bcd\", \"name:zh\": \"\\u7279\\u91cc\\u51e1\\u5f97\\u7405\\u56fd\\u9645\\u673a\\u573a\", \"ref\": \"TRV\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.6818125,
            88.3318927
          ]
        },
        "properties": {
          "name": "Bagdogra Airport",
          "name_en": "Bagdogra Airport",
          "name_fr": null,
          "iata": "IXB",
          "icao": "VEBD",
          "wikipedia": "en:Bagdogra Airport",
          "wikidata": "Q2900847",
          "website": null,
          "phone": null,
          "operator": null,
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=116650292",
          "source": [
            "wikipedia"
          ],
          "other_tags": "{\"aerodrome\": \"international\", \"aeroway\": \"aerodrome\", \"alt_name\": \"Civil Aerodrome Bagdogra\", \"barrier\": \"fence\", \"ele\": \"126\", \"landuse\": \"military\", \"name:hi\": \"\\u092c\\u093e\\u0917\\u0921\\u094b\\u0917\\u0930\\u093e \\u0935\\u093f\\u092e\\u093e\\u0928\\u0915\\u094d\\u0937\\u0947\\u0924\\u094d\\u0930\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.9933657,
            80.1672985
          ]
        },
        "properties": {
          "name": "Chennai International Airport",
          "name_en": "Chennai Meenambakkam Airport",
          "name_fr": null,
          "iata": "MAA",
          "icao": "VOMM",
          "wikipedia": "en:Chennai International Airport",
          "wikidata": "Q502670",
          "website": "https:\/\/www.chennaiairport.com\/",
          "phone": null,
          "operator": null,
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=23633604",
          "source": null,
          "other_tags": "{\"addr:postcode\": \"600027\", \"addr:street\": \"Grand Southern Trunk Road\", \"aerodrome:type\": \"international\", \"aeroway\": \"aerodrome\", \"name:de\": \"Chennai Flughafen\", \"name:hi\": \"\\u091a\\u0928\\u094d\\u0928\\u0908 \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0939\\u0935\\u093e\\u0908 \\u0905\\u0921\\u094d\\u0921\\u093e\", \"name:kn\": \"\\u0c9a\\u0cc6\\u0ca8\\u0ccd\\u0ca8\\u0cc8 \\u0c87\\u0c82\\u0c9f\\u0cb0\\u0ccd\\u200c\\u0ca8\\u0ccd\\u0caf\\u0cbe\\u0cb6\\u0ca8\\u0cb2\\u0ccd \\u0c8f\\u0cb0\\u0ccd\\u200c\\u0caa\\u0ccb\\u0cb0\\u0ccd\\u0c9f\\u0ccd\", \"name:ml\": \"\\u0d1a\\u0d46\\u0d28\\u0d4d\\u0d28\\u0d48 \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30 \\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:ta\": \"\\u0b9a\\u0bc6\\u0ba9\\u0bcd\\u0ba9\\u0bc8 \\u0baa\\u0ba9\\u0bcd\\u0ba9\\u0bbe\\u0b9f\\u0bcd\\u0b9f\\u0bc1 \\u0bb5\\u0bbe\\u0ba9\\u0bc2\\u0bb0\\u0bcd\\u0ba4\\u0bbf \\u0ba8\\u0bbf\\u0bb2\\u0bc8\\u0baf\\u0bae\\u0bcd\", \"name:zh\": \"\\u91d1\\u5948\\u56fd\\u9645\\u673a\\u573a\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.1113343,
            91.5853185
          ]
        },
        "properties": {
          "name": "Lokpriya Gopinath Bordoloi International Airport",
          "name_en": null,
          "name_fr": null,
          "iata": "GAU",
          "icao": "VEGT",
          "wikipedia": null,
          "wikidata": "Q2673008",
          "website": null,
          "phone": null,
          "operator": null,
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=130513487",
          "source": null,
          "other_tags": "{\"aerodrome\": \"international\", \"aeroway\": \"aerodrome\", \"alt_name\": \"Guwahati International Airport\", \"is_in\": \"Guwahati, Assam, India\", \"is_in:country\": \"India\", \"name:etymology:wikidata\": \"Q737324\", \"name:hi\": \"\\u0932\\u094b\\u0915\\u092a\\u094d\\u0930\\u093f\\u092f \\u0917\\u094b\\u092a\\u0940\\u0928\\u093e\\u0925 \\u092c\\u0930\\u0926\\u094b\\u0932\\u094b\\u0908 \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0939\\u0935\\u093e\\u0908 \\u0905\\u0921\\u094d\\u0921\\u093e\", \"old_name\": \"Borjhar Airport\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            13.1976621,
            77.7062643
          ]
        },
        "properties": {
          "name": "Kempegowda International Airport",
          "name_en": null,
          "name_fr": null,
          "iata": "BLR",
          "icao": "VOBL",
          "wikipedia": "en:Kempegowda International Airport",
          "wikidata": "Q503364",
          "website": "https:\/\/www.bengaluruairport.com\/",
          "phone": null,
          "operator": "BIAL",
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=252746837",
          "source": null,
          "other_tags": "{\"addr:city\": \"Bengaluru\", \"addr:postcode\": \"560300\", \"aerodrome\": \"international\", \"aerodrome:type\": \"public\", \"aeroway\": \"aerodrome\", \"alt_name\": \"Bangalore Airport\", \"barrier\": \"wall\", \"ele\": \"915\", \"internet_access\": \"wlan\", \"internet_access:fee\": \"no\", \"internet_access:ssid\": \"BLR Airport Free Wi-Fi\", \"is_in\": \"Devanahalli\", \"landuse\": \"commercial\", \"name:ar\": \"\\u0645\\u0637\\u0627\\u0631 \\u0643\\u064a\\u0645\\u0628\\u064a\\u063a\\u0648\\u062f\\u0627 \\u0627\\u0644\\u062f\\u0648\\u0644\\u064a\", \"name:etymology:wikidata\": \"Q6387049\", \"name:hi\": \"\\u0915\\u0947\\u092e\\u094d\\u092a\\u0947\\u0917\\u094b\\u0921\\u093e \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0915\\u094d\\u0937\\u0947\\u0924\\u094d\\u0930\", \"name:kn\": \"\\u0c95\\u0cc6\\u0c82\\u0caa\\u0cc7\\u0c97\\u0ccc\\u0ca1 \\u0c85\\u0c82\\u0ca4\\u0cbe\\u0cb0\\u0cbe\\u0cb7\\u0ccd\\u0c9f\\u0ccd\\u0cb0\\u0cc0\\u0caf \\u0cb5\\u0cbf\\u0cae\\u0cbe\\u0ca8 \\u0ca8\\u0cbf\\u0cb2\\u0ccd\\u0ca6\\u0cbe\\u0ca3 \\u0cac\\u0cc6\\u0c82\\u0c97\\u0cb3\\u0cc2\\u0cb0\\u0cc1\", \"name:ml\": \"\\u0d15\\u0d46\\u0d02\\u0d2a\\u0d46\\u0d17\\u0d57\\u0d21 \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d3e\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30 \\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:ru\": \"\\u041c\\u0435\\u0436\\u0434\\u0443\\u043d\\u0430\\u0440\\u043e\\u0434\\u043d\\u044b\\u0439 \\u0430\\u044d\\u0440\\u043e\\u043f\\u043e\\u0440\\u0442 \\u0411\\u0430\\u043d\\u0433\\u0430\\u043b\\u043e\\u0440\", \"name:te\": \"\\u0c15\\u0c46\\u0c02\\u0c2a\\u0c47\\u0c17\\u0c4c\\u0c21 \\u0c05\\u0c02\\u0c24\\u0c30\\u0c4d\\u0c1c\\u0c3e\\u0c24\\u0c40\\u0c2f \\u0c35\\u0c3f\\u0c2e\\u0c3e\\u0c28\\u0c3e\\u0c36\\u0c4d\\u0c30\\u0c2f\\u0c02\", \"old_name\": \"Bengaluru International Airport\", \"owner\": \"Airports Authority of India\", \"ref\": \"BLR\", \"short_name\": \"KIA\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.1544602,
            76.4026587
          ]
        },
        "properties": {
          "name": "Cochin International Airport",
          "name_en": "Cochin International Airport",
          "name_fr": null,
          "iata": "COK",
          "icao": "VOCI",
          "wikipedia": "en:Cochin International Airport",
          "wikidata": "Q592172",
          "website": "https:\/\/cial.aero\/",
          "phone": "+914842610115",
          "operator": "Cochin International Airport Ltd. - CIAL",
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=254099650",
          "source": null,
          "other_tags": "{\"aerodrome:type\": \"international\", \"aeroway\": \"aerodrome\", \"internet_access\": \"wlan\", \"name:ar\": \"\\u0645\\u0637\\u0627\\u0631 \\u0643\\u0648\\u062a\\u0634\\u064a\\u0646 \\u0627\\u0644\\u062f\\u0648\\u0644\\u064a\", \"name:bn\": \"\\u0995\\u09cb\\u099a\\u09bf\\u09a8 \\u0986\\u09a8\\u09cd\\u09a4\\u09b0\\u09cd\\u099c\\u09be\\u09a4\\u09bf\\u0995 \\u09ac\\u09bf\\u09ae\\u09be\\u09a8\\u09ac\\u09a8\\u09cd\\u09a6\\u09b0\", \"name:es\": \"Aeropuerto Internacional de Coch\\u00edn\", \"name:fa\": \"\\u0641\\u0631\\u0648\\u062f\\u06af\\u0627\\u0647 \\u0628\\u06cc\\u0646\\u200c\\u0627\\u0644\\u0645\\u0644\\u0644\\u06cc \\u06a9\\u0648\\u0686\\u06cc\\u0646\", \"name:he\": \"\\u05e9\\u05d3\\u05d4 \\u05d4\\u05ea\\u05e2\\u05d5\\u05e4\\u05d4 \\u05d4\\u05d1\\u05d9\\u05e0\\u05dc\\u05d0\\u05d5\\u05de\\u05d9 \\u05e7\\u05d5\\u05e6'\\u05d9\", \"name:hi\": \"\\u0915\\u094b\\u091a\\u094d\\u091a\\u093f \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0939\\u0935\\u093e\\u0908 \\u0905\\u0921\\u094d\\u0921\\u093e\", \"name:kn\": \"\\u0c95\\u0cca\\u0c9a\\u0ccd\\u0c9a\\u0cbf \\u0c85\\u0c82\\u0ca4\\u0cb0\\u0cbe\\u0cb7\\u0ccd\\u0c9f\\u0ccd\\u0cb0\\u0cc0\\u0caf \\u0cb5\\u0cbf\\u0cae\\u0cbe\\u0ca8 \\u0ca8\\u0cbf\\u0cb2\\u0ccd\\u0ca6\\u0cbe\\u0ca3\", \"name:ml\": \"\\u0d15\\u0d4a\\u0d1a\\u0d4d\\u0d1a\\u0d3f \\u0d28\\u0d46\\u0d1f\\u0d41\\u0d2e\\u0d4d\\u0d2a\\u0d3e\\u0d36\\u0d47\\u0d30\\u0d3f \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30 \\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:pa\": \"\\u0a15\\u0a4b\\u0a1a\\u0a3f\\u0a28 \\u0a05\\u0a70\\u0a24\\u0a30\\u0a30\\u0a3e\\u0a38\\u0a3c\\u0a1f\\u0a30\\u0a40 \\u0a39\\u0a35\\u0a3e\\u0a08 \\u0a05\\u0a71\\u0a21\\u0a3e\", \"name:ru\": \"\\u041c\\u0435\\u0436\\u0434\\u0443\\u043d\\u0430\\u0440\\u043e\\u0434\\u043d\\u044b\\u0439 \\u0430\\u044d\\u0440\\u043e\\u043f\\u043e\\u0440\\u0442 \\u041a\\u043e\\u0447\\u0447\\u0438\", \"name:ta\": \"\\u0b95\\u0bca\\u0b9a\\u0bcd\\u0b9a\\u0bbf \\u0baa\\u0ba9\\u0bcd\\u0ba9\\u0bbe\\u0b9f\\u0bcd\\u0b9f\\u0bc1 \\u0bb5\\u0bbe\\u0ba9\\u0bc2\\u0bb0\\u0bcd\\u0ba4\\u0bbf \\u0ba8\\u0bbf\\u0bb2\\u0bc8\\u0baf\\u0bae\\u0bcd\", \"name:zh\": \"\\u79d1\\u94a6\\u56fd\\u9645\\u673a\\u573a\", \"ref\": \"COK\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            31.708668,
            74.7974456
          ]
        },
        "properties": {
          "name": "Sri Guru Ram Dass Jee International Airport",
          "name_en": null,
          "name_fr": null,
          "iata": "ATQ",
          "icao": "VIAR",
          "wikipedia": "en:Sri Guru Ram Dass Jee International Airport",
          "wikidata": "Q385356",
          "website": null,
          "phone": null,
          "operator": "Airports Authority of India",
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=297249110",
          "source": null,
          "other_tags": "{\"addr:city\": \"Raja Sansi, Amritsar\", \"aerodrome\": \"international\", \"aeroway\": \"aerodrome\", \"alt_name\": \"Raja Sansi Airport\", \"barrier\": \"wall\", \"is_in:country\": \"India\", \"name:etymology:wikidata\": \"Q335353\", \"name:hi\": \"\\u0936\\u094d\\u0930\\u0940 \\u0917\\u0941\\u0930\\u0941 \\u0930\\u093e\\u092e\\u0926\\u093e\\u0938 \\u091c\\u0940 \\u0905\\u0928\\u094d\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0915\\u094d\\u0937\\u0947\\u0924\\u094d\\u0930\", \"name:ml\": \"\\u0d17\\u0d41\\u0d30\\u0d41 \\u0d30\\u0d3e\\u0d02\\u0d26\\u0d3e\\u0d38\\u0d4d \\u0d1c\\u0d40 \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d3e\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30\\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:pa\": \"\\u0a38\\u0a4d\\u0a30\\u0a40 \\u0a17\\u0a41\\u0a30\\u0a42 \\u0a30\\u0a3e\\u0a2e\\u0a26\\u0a3e\\u0a38 \\u0a1c\\u0a40 \\u0a05\\u0a70\\u0a24\\u0a30\\u0a30\\u0a3e\\u0a38\\u0a3c\\u0a1f\\u0a30\\u0a40 \\u0a39\\u0a35\\u0a3e\\u0a08 \\u0a05\\u0a71\\u0a21\\u0a3e, \\u0a30\\u0a3e\\u0a1c\\u0a3e \\u0a38\\u0a3e\\u0a02\\u0a38\\u0a40\", \"name:ru\": \"\\u041c\\u0435\\u0436\\u0434\\u0443\\u043d\\u0430\\u0440\\u043e\\u0434\\u043d\\u044b\\u0439 \\u0430\\u044d\\u0440\\u043e\\u043f\\u043e\\u0440\\u0442 \\u0410\\u043c\\u0440\\u0438\\u0442\\u0441\\u0430\\u0440 (\\u0420\\u0430\\u0434\\u0436\\u0430 \\u0421\\u0430\\u043d\\u0441\\u0438)\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            11.9172472,
            75.5444176
          ]
        },
        "properties": {
          "name": "Kannur International Airport",
          "name_en": "Kannur International Airport",
          "name_fr": "A\u00e9roport international de Cannanore",
          "iata": "CNN",
          "icao": "VOKN",
          "wikipedia": "en:Kannur International Airport",
          "wikidata": "Q3595649",
          "website": "https:\/\/www.kannurairport.aero\/",
          "phone": null,
          "operator": "KIAL",
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=805245624",
          "source": null,
          "other_tags": "{\"addr:postcode\": \"670708\", \"aerodrome:type\": \"international\", \"aeroway\": \"aerodrome\", \"internet_access\": \"yes\", \"internet_access:description\": \"Free for first 15 minutes usage. Then pay to continue.\", \"internet_access:fee\": \"yes\", \"internet_access:ssid\": \"Kannur Airport\", \"name:ar\": \"\\u0645\\u0637\\u0627\\u0631 \\u0643\\u0627\\u0646\\u0648\\u0631 \\u0627\\u0644\\u062f\\u0648\\u0644\\u064a\", \"name:bn\": \"\\u0995\\u09a3\\u09cd\\u09a3\\u09c1\\u09b0 \\u0986\\u09a8\\u09cd\\u09a4\\u09b0\\u09cd\\u099c\\u09be\\u09a4\\u09bf\\u0995 \\u09ac\\u09bf\\u09ae\\u09be\\u09a8\\u09ac\\u09a8\\u09cd\\u09a6\\u09b0\", \"name:es\": \"Aeropuerto Internacional de Kannur\", \"name:he\": \"\\u05e9\\u05d3\\u05d4 \\u05ea\\u05e2\\u05d5\\u05e4\\u05d4 \\u05d1\\u05d9\\u05e0\\u05dc\\u05d0\\u05d5\\u05de\\u05d9 \\u05d1\\u05db\\u05e0\\u05d5\\u05e8\", \"name:hi\": \"\\u0915\\u0923\\u094d\\u0923\\u0942\\u0930 \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0939\\u0935\\u093e\\u0908 \\u0905\\u0921\\u094d\\u0921\\u093e\", \"name:ja\": \"\\u30ab\\u30f3\\u30cc\\u30fc\\u30eb\\u56fd\\u969b\\u7a7a\\u6e2f\", \"name:kn\": \"\\u0c95\\u0ca3\\u0ccd\\u0ca3\\u0cc2\\u0cb0\\u0cc1 \\u0c85\\u0c82\\u0ca4\\u0cb0\\u0cbe\\u0cb7\\u0ccd\\u0c9f\\u0ccd\\u0cb0\\u0cc0\\u0caf \\u0cb5\\u0cbf\\u0cae\\u0cbe\\u0ca8 \\u0ca8\\u0cbf\\u0cb2\\u0ccd\\u0ca6\\u0cbe\\u0ca3\", \"name:ml\": \"\\u0d15\\u0d23\\u0d4d\\u0d23\\u0d42\\u0d7c \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30 \\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:pa\": \"\\u0a15\\u0a28\\u0a42\\u0a30 \\u0a05\\u0a70\\u0a24\\u0a30\\u0a30\\u0a3e\\u0a38\\u0a3c\\u0a1f\\u0a30\\u0a40 \\u0a39\\u0a35\\u0a3e\\u0a08 \\u0a05\\u0a71\\u0a21\\u0a3e\", \"name:ru\": \"\\u041a\\u0430\\u043d\\u043d\\u0443\\u0440 \\u043c\\u0435\\u0436\\u0434\\u0443\\u043d\\u0430\\u0440\\u043e\\u0434\\u043d\\u044b\\u0439 \\u0430\\u044d\\u0440\\u043e\\u043f\\u043e\\u0440\\u0442\", \"name:ta\": \"\\u0b95\\u0ba3\\u0bcd\\u0ba3\\u0bc2\\u0bb0\\u0bcd \\u0baa\\u0ba9\\u0bcd\\u0ba9\\u0bbe\\u0b9f\\u0bcd\\u0b9f\\u0bc1 \\u0bb5\\u0bbe\\u0ba9\\u0bc2\\u0bb0\\u0bcd\\u0ba4\\u0bbf \\u0ba8\\u0bbf\\u0bb2\\u0bc8\\u0baf\\u0bae\\u0bcd\", \"name:te\": \"\\u0c15\\u0c28\\u0c4d\\u0c28\\u0c42\\u0c30\\u0c4d \\u0c05\\u0c02\\u0c24\\u0c30\\u0c4d\\u0c1c\\u0c3e\\u0c24\\u0c40\\u0c2f \\u0c35\\u0c3f\\u0c2e\\u0c3e\\u0c28\\u0c3e\\u0c36\\u0c4d\\u0c30\\u0c2f\\u0c02\", \"name:zh\": \"\\u574e\\u52aa\\u5c14\\u56fd\\u9645\\u673a\\u573a\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            19.0901549,
            72.8629148
          ]
        },
        "properties": {
          "name": "Chhatrapati Shivaji Maharaj International Airport",
          "name_en": null,
          "name_fr": null,
          "iata": "BOM",
          "icao": "VABB",
          "wikipedia": "en:Chhatrapati Shivaji Maharaj International Airport",
          "wikidata": "Q504368",
          "website": "https:\/\/csmia.adaniairports.com\/",
          "phone": null,
          "operator": "Mumbai International Airport Limited",
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=22826676",
          "source": [
            "Gagravarr_Airports"
          ],
          "other_tags": "{\"addr:city\": \"Mumbai\", \"aerodrome\": \"international\", \"aerodrome:type\": \"public\", \"aeroway\": \"aerodrome\", \"alt_name\": \"Mumbai Airport;Mumbai International Airport\", \"alt_name:mr\": \"\\u092e\\u0941\\u0902\\u092c\\u0908 \\u0935\\u093f\\u092e\\u093e\\u0928\\u0924\\u0933; \\u092e\\u0941\\u0902\\u092c\\u0908 \\u0906\\u0902\\u0924\\u0930\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0924\\u0933\", \"ele\": \"11\", \"name:ar\": \"\\u0645\\u0637\\u0627\\u0631 \\u062a\\u0634\\u0627\\u062a\\u0631\\u0627\\u0628\\u0627\\u062a\\u064a \\u0634\\u064a\\u0641\\u0627\\u062c\\u064a \\u0627\\u0644\\u062f\\u0648\\u0644\\u064a\", \"name:etymology:wikidata\": \"Q239505\", \"name:hi\": \"\\u091b\\u0924\\u094d\\u0930\\u092a\\u0924\\u093f \\u0936\\u093f\\u0935\\u093e\\u091c\\u0940 \\u092e\\u0939\\u093e\\u0930\\u093e\\u091c \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0915\\u094d\\u0937\\u0947\\u0924\\u094d\\u0930\", \"name:kn\": \"\\u0c9b\\u0ca4\\u0ccd\\u0cb0\\u0caa\\u0ca4\\u0cbf \\u0cb6\\u0cbf\\u0cb5\\u0cbe\\u0c9c\\u0cbf \\u0c87\\u0c82\\u0c9f\\u0cb0\\u0ccd\\u200c\\u0ca8\\u0ccd\\u0caf\\u0cbe\\u0cb6\\u0ca8\\u0cb2\\u0ccd \\u0c8f\\u0cb0\\u0ccd\\u200c\\u0caa\\u0ccb\\u0cb0\\u0ccd\\u0c9f\\u0ccd\", \"name:ml\": \"\\u0d1b\\u0d24\\u0d4d\\u0d30\\u0d2a\\u0d24\\u0d3f \\u0d36\\u0d3f\\u0d35\\u0d3e\\u0d1c\\u0d3f \\u0d2e\\u0d39\\u0d3e\\u0d30\\u0d3e\\u0d1c\\u0d4d \\u0d05\\u0d28\\u0d4d\\u0d24\\u0d3e\\u0d30\\u0d3e\\u0d37\\u0d4d\\u0d1f\\u0d4d\\u0d30 \\u0d35\\u0d3f\\u0d2e\\u0d3e\\u0d28\\u0d24\\u0d4d\\u0d24\\u0d3e\\u0d35\\u0d33\\u0d02\", \"name:mr\": \"\\u091b\\u0924\\u094d\\u0930\\u092a\\u0924\\u0940 \\u0936\\u093f\\u0935\\u093e\\u091c\\u0940 \\u092e\\u0939\\u093e\\u0930\\u093e\\u091c \\u0906\\u0902\\u0924\\u0930\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0924\\u0933\", \"name:ru\": \"\\u041c\\u0435\\u0436\\u0434\\u0443\\u043d\\u0430\\u0440\\u043e\\u0434\\u043d\\u044b\\u0439 \\u0430\\u044d\\u0440\\u043e\\u043f\\u043e\\u0440\\u0442 \\u0438\\u043c\\u0435\\u043d\\u0438 \\u0427\\u0430\\u0442\\u0440\\u0430\\u043f\\u0430\\u0442\\u0438 \\u0428\\u0438\\u0432\\u0430\\u0434\\u0436\\u0438\", \"name:ta\": \"\\u0b9a\\u0ba4\\u0bcd\\u0ba4\\u0bbf\\u0bb0\\u0baa\\u0ba4\\u0bbf \\u0b9a\\u0bbf\\u0bb5\\u0bbe\\u0b9c\\u0bbf \\u0baa\\u0ba9\\u0bcd\\u0ba9\\u0bbe\\u0b9f\\u0bcd\\u0b9f\\u0bc1 \\u0bb5\\u0bbe\\u0ba9\\u0bc2\\u0bb0\\u0bcd\\u0ba4\\u0bbf \\u0ba8\\u0bbf\\u0bb2\\u0bc8\\u0baf\\u0bae\\u0bcd\", \"name:zh\": \"\\u8d3e\\u7279\\u62c9\\u5e15\\u8482\\u00b7\\u5e0c\\u74e6\\u5409\\u56fd\\u9645\\u673a\\u573a\", \"operator:type\": \"government\", \"rank_aci:2016\": \"29\"}",
          "country": "India",
          "country_code": "IN"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            21.0909307,
            79.054701
          ]
        },
        "properties": {
          "name": "Dr. Babasaheb Ambedkar International Airport",
          "name_en": null,
          "name_fr": null,
          "iata": "NAG",
          "icao": "VANP",
          "wikipedia": "en:Dr. Babasaheb Ambedkar International Airport",
          "wikidata": "Q1657780",
          "website": null,
          "phone": null,
          "operator": null,
          "description": null,
          "id": "https:\/\/www.openstreetmap.org\/edit?node=1195628513",
          "source": null,
          "other_tags": "{\"aerodrome:type\": \"international\", \"aeroway\": \"aerodrome\", \"alt_name\": \"Nagpur Airport\", \"ele\": \"315\", \"name:etymology:wikidata\": \"Q231690\", \"name:hi\": \"\\u0921\\u0949\\u0970 \\u092c\\u093e\\u092c\\u093e\\u0938\\u093e\\u0939\\u0947\\u092c \\u0906\\u0902\\u092c\\u0947\\u0921\\u0915\\u0930 \\u0905\\u0902\\u0924\\u0930\\u094d\\u0930\\u093e\\u0937\\u094d\\u091f\\u094d\\u0930\\u0940\\u092f \\u0935\\u093f\\u092e\\u093e\\u0928\\u0915\\u094d\\u0937\\u0947\\u0924\\u094d\\u0930\", \"ref\": \"NAG\"}",
          "country": "India",
          "country_code": "IN"
        }
      }
    ]
  }
    ;

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
              // center: [20.5937,78.9629],
              zoomControl: true,
              location: true,
              zoom: 4
            },
          },
          // (data:any)=>{ this.mapObject = data ;  }

        )
        // console.log('map');

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
          // console.log('marker');
        });
      })
  }

}