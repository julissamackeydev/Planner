import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NavigateComponent } from './navigate/navigate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GoalsComponent } from './goals/goals.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    ScheduleComponent,
    GoalsComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
