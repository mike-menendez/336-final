var express = require('express');
var router = express.Router();

/* GET 3rd Party API page. */
router.get('/', function(req, res, next) {
    res.render('3rdparty.html');
});

module.exports = router;