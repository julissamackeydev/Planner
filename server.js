const express = require('express'),
cors = require('cors'),
mongoose =  require('mongoose')
app = express();
app.use(cors());
mongoose.connect('mongodb://localhost/PlannerDev');
app.listen(8000, ()=>{
  console.log('server listening on 8000');
})

app.route('/api/schedule').get((req,res)=>{
    res.send({
        "schedule": [{
            timestamp: "",
            activity: "",
            status:'In progress'
        }]
    })
})