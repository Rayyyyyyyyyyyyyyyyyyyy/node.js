var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('prod index');
});
router.get('/view', function(req, res, next) {
    res.send('view specific produt info');
});
router.get('/about', function(req, res, next) {
    res.send('prod about');
});

module.exports = router;