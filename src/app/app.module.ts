import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PlotComponent} from "./plot/plot.component";
import {TabPanel} from "./tab/tab.component";
import {TabView} from "./tab/tab.component";

import { Angular2GoogleChartModule } from 'angular2-google-chart/angular2-google-chart';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PlotComponent,
    TabPanel,
    TabView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Angular2GoogleChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
