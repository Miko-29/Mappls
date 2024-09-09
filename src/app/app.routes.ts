import { Routes } from '@angular/router';
import { MarkerComponent } from './marker/marker.component';
import { AirportsComponent } from './airports/airports.component';
import { PolylineComponent } from './polyline/polyline.component';

export const routes: Routes = [
    {path:'',redirectTo:'marker',pathMatch:'full'},
    {path:'marker',component:MarkerComponent},
    {path:'airports',component:AirportsComponent},
    {path:'polyline',component:PolylineComponent},
];
