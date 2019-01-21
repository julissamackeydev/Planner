const activityRouter = require('./routes/activity'),
bodyParser = require('body-parser'),
express = require('express'),
cors = require('cors'),
Goal = require('./src/models/Goal'),
mongoose =  require('mongoose'),

app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/schedule', activityRouter);

mongoose.connect('mongodb://localhost/PlannerDev');
mongoose.connection.on('connected', ()=>{
    console.info('mongodb connected on port 27017');
});
mongoose.connection.on('error', (error)=>{
    console.info('failed to connect to database: ', error)
});
app.listen(8000, ()=>{
  console.info('server listening on 8000');
});


