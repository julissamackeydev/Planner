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
  activities: Activity;
  constructor(private scheduleService:ScheduleService) { }

  ngOnInit(){
    M.AutoInit();
    this.getSchedule();
  } 

  getSchedule(){
    return this.scheduleService.getSchedule().subscribe((activities)=>{
      this.activities = activities;
    })
  }

}
 