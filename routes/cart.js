var express = require('express');
var router = express.Router();

/* GET Cart page. */
router.get('/', function(req, res, next) {
    res.render('cart.html');
});

module.exports = router;