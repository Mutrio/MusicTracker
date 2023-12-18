const router = require('express').Router(),
    timelineController = require('../controllers/timelineController');
    
    console.log("타임라인페이지");
router.get("/", timelineController.timeline);

module.exports = router;