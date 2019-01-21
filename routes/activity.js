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

router.put('/', (req,res,next)=>{
    // will have to be able to update status and time and repeat settings
    // will have to have logic on DAO that checks to see if this activity is repeated and whether the user wants to change just one or all
})

router.delete('/', (req,res,next)=>{
    // will have to have logic on DAO that checks to see if this activity is repeated and whether the user wants to change just one or all
})

module.exports = router;