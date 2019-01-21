import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { Activity } from '../../models/Activity';
import * as M from 'materialize-css';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  // hours: String[] = ["5am", "5:30am", "6am", "6:30am", "7am", "7:30am", "8am", "8:30am", "9am", "9:30am" , "10am", "10:30am", "11am", "11:30am", "12pm", "12:30pm", "1pm", "1:30pm", "2pm", "2:30pm", "3pm", "3:30pm", "4pm", "4:30pm", "5pm", "5:30pm", "6pm", "6:30pm", "7pm", "7:30pm", "8pm", "8:30pm", "9pm", "9:30pm" , "10pm", "10:30pm", "11pm", "11:30pm"]
  activities: Activity;
  constructor(private scheduleService:ScheduleService) { }

  ngOnInit(){
    M.AutoInit();
    this.getSchedule();
  } 

  getSchedule(){
    return this.scheduleService.getSchedule().subscribe((activities)=>{
      console.log(activities)
      this.activities = activities
      console.log(this.activities)
    })
  }

}
