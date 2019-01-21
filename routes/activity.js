const Activity = require('../src/models/Activity'),
express=require('express'),
router = express.Router();

router.get('/',(req,res, next)=>{
    Activity.find({}, (error, activities)=>{
        if(error){
            res.json(error);
        }
        else{
            res.json(activities)
        }
    })
});

router.post('/',(req,res, next)=>{
    console.log(req)
    let entry = new Activity({
        author: req.body.author,
        time: req.body.time,
        description: req.body.description,
        status: req.body.status,
        repeat: req.body.repeat
    });
    entry.save((error, activity)=>{
        if(error){
            res.json(error);
        }
        else{
            res.json({message:"Activity added successfully."});
        }
    })
})

module.exports = router;