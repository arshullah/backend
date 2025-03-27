const express = require('express');
const Model = require('../models/userModel');

// router banao jo main file ke sath me lgta hai
const router = express.Router();

router.post('/add', (req,res) => {

console.log(req.body);


    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});

// getall
router.get('/getall', (req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//url parameter
router.get('/getbycity/:city',(req, res) => {
    Model.find({ city: req.params.city })
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});

router.get('/getbyemail', (req ,res)=>{
    res.send('response from user getbye,ai')
})

// getbyid
router.get('/getyid/:id', (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});
// updateid
router.get('/update/:id', (req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
            
        });
});
// delete
router.get('/delete/:id', (req,res) => {
   Model.findByIdAndDelete (req.params.id)
   .then((result) => {
    res.status(200).json(result);
}).catch((err) => {
    console.log(err);
    res.status(500).json(err)
    });
});



module.exports = router;