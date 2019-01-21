const Activity = require('./src/models/Activity'),
bodyParser = require('body-parser'),
express = require('express'),
cors = require('cors'),
Goal = require('./src/models/Goal'),
mongoose =  require('mongoose'),

app = express();
app.use(bodyParser.json())
app.use(cors());

mongoose.connect('mongodb://localhost/PlannerDev');
mongoose.connecttion.on('connected', ()=>{
    console.info('mongodb connected on port 27017');
})
mongoose.connection.on('error', (error)=>{
    console.info('failed to connect to database: ', error)
})
app.listen(8000, ()=>{
  console.info('server listening on 8000');
})

app.route('/api/schedule').get((req,res)=>{
    Activity.find({}, (err, activities)=>{
         res.json(activities);
    })
})

app.route('/api/schedule').post((req,res)=>{
    console.log(req)
    res.json({success:true})
    let newA = new Activity({
        author: req.body.author,
        timestamp: new Date(),
        description: req.body.description,
        status: req.body.status
    });
    newA.save((error, task)=>{
        if(error){
            response.json(error);
        }
        else{
            response.json({message:"Activity added successfully."});
        }
    })
})