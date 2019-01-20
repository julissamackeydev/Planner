const express = require('express'),
cors = require('cors'),
app = express();
app.use(cors())
app.listen(8000, ()=>{
  console.log('server listening on 8000');
})

app.route('/api/schedule').get((req,res)=>{
    res.send({
        "activities": [{
            timestamp: "",
            activity: "",
            status:'In progress'
        }]
    })
})