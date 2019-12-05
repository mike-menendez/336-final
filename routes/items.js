var express = require('express');
var router = express.Router();
var mysql = require('mysql');



/* GET items page. */
router.get('/', function(req, res, next) {
    res.render('items.html');
});

router.get('/all', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });

    connection.connect();

    connection.query('SELECT * FROM items', function(err, results) {
        if (err) {
            console.log(connection.state);
            console.log(err);
            throw err;
        }
        connection.end();
        try {
            var x = JSON.parse(JSON.stringify(results));

            res.json(x).status(200);

        } catch (error) {
            console.log("catch area");
            res.json({ auth: "false" }).status(200);
        }
    });
});

module.exports = router;