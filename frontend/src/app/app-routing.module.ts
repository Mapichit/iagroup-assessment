import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assessment1HeroComponent } from "./assessment1-hero/assessment1-hero.component";
import { Assissment2ApiCallComponent} from "./assessment2-api-call/assissment2-api-call.component";
import { Assessment3TriangleComponent } from "./assessment3-triangle/assessment3-triangle.component";
import {Assessment4CitizenIdComponent} from "./assessment4-citizen-id/assessment4-citizen-id.component";
import { Assessment5DiamondComponent } from "./assessment5-diamond/assessment5-diamond.component";



const routes: Routes = [
  { path: 'hero',
    component: Assessment1HeroComponent
  },
  {
    path: 'posts',
    component: Assissment2ApiCallComponent
  },
  {
    path: 'triangle',
    component: Assessment3TriangleComponent
  },
  {
    path: 'citizenId',
    component: Assessment4CitizenIdComponent
  },
  {
    path: 'diamond',
    component: Assessment5DiamondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
