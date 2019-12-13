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
    var x = req.body.vals.split(",");
    console.log(x);
    connection.query('DELETE FROM ? WHERE ? = ?', [req.body.table, x[0], x[1]], function(err, results) {
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
    console.log(req.body);
    var x = req.body.vals.split(",");
    console.log(x);
    connection.query('UPDATE ? SET ? = ? WHERE ? = ?', [req.body.table, x[0], x[1], x[2], x[3]], function(err, results) {
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

// Get average prices from the table
router.get("/q1", function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });

    connection.connect();
    connection.query("SELECT AVG(price) FROM items", function(err, results) {
        if (err) {
            console.log("error:   ", err);
            throw err;
        }
        console.log(JSON.stringify(results));
        connection.end();
        res.json(JSON.stringify(results)).status(200);
    });

});

// Get average number of instances sold
router.get("/q2", function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });

    connection.connect();
    connection.query("SELECT AVG(quantity) FROM order_hist", function(err, results) {
        if (err) {
            console.log("error:    ", err);
            throw err;
        }
        console.log(JSON.stringify(results));
        connection.end();
        res.json(JSON.stringify(results)).status(200);
    });
    res.send(200);
});

// Get price of most frequently purchased item
router.get("/q3", function(req, res, next) {
    var connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vdn3cm4glt7egrwm",
        password: "zid8gz1jh2x49c32",
        database: "bza0dnwn2s35uasl"
    });
    connection.connect();
    connection.query("SELECT price FROM order_hist LEFT JOIN items ON order_hist.item_id = items.item_id ORDER BY quantity LIMIT 1", function(err, results) {
        if (err) {
            console.log("error, ", err);
        }
        console.log(JSON.stringify(results));
        res.json(JSON.stringify(results)).status(200);
    });
    res.status(200);
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
    var x = req.body.vals.split(",");
    console.log("vals: ", req.body.vals);
    console.log("table: ", req.body.table);
    if (req.body.table == "items") {
        q = "INSERT INTO items (p_name, cat, price, img) VALUES (\"" + x[0] + "\", \"" + x[1] + "\", \"" + x[2] + "\", \"" + x[3] + "\")";
    } else if (req.body.table == "users") {
        q = "INSERT INTO users (uname, pass) VALUES (\"" + x[0] + "\", \"" + x[1] + "\")";
    } else {
        q = "INSERT INTO order_hist (item_id, quantity) VALUES (\"" + x[0] + "\", \"" + x[1] + "\")";
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
    res.status(200);
});

module.exports = router;