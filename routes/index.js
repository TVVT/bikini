var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
	, format = require('util').format;

/* GET home page. */
router.get('/', function(req, res) {

    MongoClient.connect('mongodb://127.0.0.1:27017/bikini', function(err, db) {
        if (err) throw err;
        var collection = db.collection('visual');
        console.log(collection)

        // collection.insert({
        //     a: 2
        // }, function(err, docs) {

        //     collection.count(function(err, count) {
        //         console.log(format("count = %s", count));
        //     });

        //     // Locate all the entries using find
        //     collection.find().toArray(function(err, results) {
        //         console.dir(results);
        //         // Let's close the db
        //         db.close();
        //     });
        // });

    });

    res.render('index', {
        title: '比基尼',
        pageName:'index'
    });
});

module.exports = router;
