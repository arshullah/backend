const express = require('express');

// router banao jo main file ke sath me lgta hai
const router = express.Router();

router.get('/add', (req,res) => {
    res.send('response from user add');
});

// getall
router.get('/getall', (req,res) => {
    res.send('response from user getall');
});
// getbyid
router.get('/getyid', (req,res) => {
    res.send('response from user getbyid');
});
// delete
router.get('/delete', (req,res) => {
    res.send('response from user delete');
});
// update
router.get('/update', (req,res) => {
    res.send('response from user update');
});



module.exports = router;