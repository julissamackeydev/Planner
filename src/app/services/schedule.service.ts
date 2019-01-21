import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../../models/Activity';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }


  getSchedule(){
    let response: Activity;
    response = this.http.get('http://localhost:8000/api/schedule');
    return response;
  }
}
