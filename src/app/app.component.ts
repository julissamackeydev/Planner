import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Planner';
  month: Number = new Date().getMonth() + 1;
  date: Number = new Date().getDate();
  year: Number = new Date().getFullYear();
  time: String = new Date().getHours() - 12 + ':' + new Date().getMinutes();
  hours: String[] = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am" , "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm" , "10pm", "11pm"]

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
