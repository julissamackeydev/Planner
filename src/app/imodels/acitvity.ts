export interface IActivity{
    author:String;
    time:{
        startTime:String,
        endTime:String
    };
    allDay?:Boolean;
    startDate?:Date;
    endDate?:DataCue;
    date?:String;
    day?:String;
    description:String;
    status?:String;
    repeat:Array<String>;
} 
