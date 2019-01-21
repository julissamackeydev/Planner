import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Planner';
  
  constructor( private scheduleService:ScheduleService){}

  // https://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=1&relatedlimit=
  
  ngOnInit(){
    this.getSchedule();
  } 

  getSchedule(){
    this.scheduleService.getSchedule().subscribe((data)=>{
      console.log(data)
    })
  }
}
