    import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assessment1HeroComponent } from './assessment1-hero/assessment1-hero.component';
import { Assissment2ApiCallComponent } from './assessment2-api-call/assissment2-api-call.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Assessment5DiamondComponent } from './assessment5-diamond/assessment5-diamond.component';
import { Assessment3TriangleComponent } from './assessment3-triangle/assessment3-triangle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assessment4CitizenIdComponent } from './assessment4-citizen-id/assessment4-citizen-id.component';


@NgModule({
  declarations: [
    AppComponent,
    Assessment1HeroComponent,
    Assissment2ApiCallComponent,
    Assessment5DiamondComponent,
    Assessment3TriangleComponent,
    Assessment4CitizenIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
