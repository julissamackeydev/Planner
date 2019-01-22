import { Component, OnInit } from '@angular/core';
import { IActivity } from '../imodels/acitvity';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
  activity: IActivity;
  activityForm: FormGroup;
  description= new FormControl('');
  time= new FormControl('');
  repeat= new FormControl('');
  submitted: Boolean = false;

  constructor(private scheduleService: ScheduleService) { }
  
  ngOnInit():void {
    this.activityForm = new FormGroup({
      'description': new FormControl(this.description, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'time':new FormControl(this.time, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'repeat': new FormControl(this.repeat)
    })
  }

  onSubmit(){ 
    this.submitted = true;
    this.activity = {
      'author': 'Julissa',
      'description': this.description.value,
      'time':this.time.value,
      'repeat':this.repeat.value
    };
    this.saveActivity(this.activity)
    
  }

  saveActivity(activity:IActivity){
    this.scheduleService.saveActivity(activity);
  }

}
