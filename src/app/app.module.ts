import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TreeGridModule, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { HeaderComponent } from './components/header/header.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { ChartModule, DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from './components/chart/chart.component';
import { HelplineComponent } from './components/helpline/helpline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrackerComponent,
    ChartComponent,
    HelplineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [
    SortService,
    FilterService,
    DateTimeService,
    LineSeriesService,
    DateTimeCategoryService,
    StripLineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
