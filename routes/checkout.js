var express = require('express');
var router = express.Router();

/* GET checkout page page. */
router.get('/', function(req, res, next) {
    res.render('checkout.html');
});

module.exports = router;