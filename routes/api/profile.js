const express = require('express');
const router = express.Router();

router.get('/test',(req,res)=> res.json({msg:"users2 works"}));

module.exports = router;