import { Routes } from '@angular/router';
import { MarkerComponent } from './marker/marker.component';
import { AirportsComponent } from './airports/airports.component';
import { PolylineComponent } from './polyline/polyline.component';
import { PolygonComponent } from './polygon/polygon.component';
import { SearchComponent } from './search/search.component';
import { CustomMarkerComponent } from './custom-marker/custom-marker.component';

export const routes: Routes = [
    {path:'',redirectTo:'marker',pathMatch:'full'},
    {path:'marker',component:MarkerComponent},
    {path:'airports',component:AirportsComponent},
    {path:'polyline',component:PolylineComponent},
    {path:'polygon',component:PolygonComponent},
    {path:'search',component:SearchComponent},
    {path:'custom-marker',component:CustomMarkerComponent},  
];
