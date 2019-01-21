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
  hours: String[] = ["5am", "5:30am", "6am", "6:30am", "7am", "7:30am", "8am", "8:30am", "9am", "9:30am" , "10am", "10:30am", "11am", "11:30am", "12pm", "12:30pm", "1pm", "1:30pm", "2pm", "2:30pm", "3pm", "3:30pm", "4pm", "4:30pm", "5pm", "5:30pm", "6pm", "6:30pm", "7pm", "7:30pm", "8pm", "8:30pm", "9pm", "9:30pm" , "10pm", "10:30pm", "11pm", "11:30pm"]

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
