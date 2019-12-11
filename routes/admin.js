var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET admin page page. */
router.get('/', function(req, res, next) {
    res.render('admin.html');
});



router.post('/delete', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });

    connection.connect();

    connection.query('DELETE FROM ? WHERE ? = ?', [req.body.table, req.body.field, req.body.val], function(err, results) {
        if (err) {
            console.log(connection.state);
            console.log(err);
            throw err;
        }
        connection.end();
        try {
            var x = JSON.parse(JSON.stringify(results));

            res.json(x).status(200);

        } catch (error) {}
    });
});



router.post('/update', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });

    connection.connect();

    connection.query('UPDATE ? FROM ? WHERE ? = ?', [req.body.update_field, req.body.table, req.body.field, req.body.val], function(err, results) {
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



router.post('/create', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });

    connection.connect();
    var q = "";
    console.log("REQ: ", req);
    console.log("BODY: ", req.body);
    if (req.body[0] == "items") {
        q = "INSERT INTO items (p_name, cat, price, img) VALUES (\"" + req.body.p_name + "\", \"" + req.body.cat + "\", \"" + req.body.price + "\", \"" + req.body.img + "\")";
    } else if (req.body[0] == "users") {
        q = "INSERT INTO users (uname, pass) VALUES (\"" + req.body.uname + "\", \"" + req.body.pass + "\")";
    } else {
        q = "INSERT INTO order_hist (item_id, quantity) VALUES (\"" + req.body.id + "\", \"" + req.body.quant + "\")";
    }
    connection.query(q, function(err, results) {
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