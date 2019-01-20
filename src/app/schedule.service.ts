import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }


  getSchedule(){
    return this.http.get('http://localhost:8000/api/schedule');
  }
}
