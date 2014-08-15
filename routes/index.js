var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient,
    formidable = require('formidable'),
    path = require('path'),
	format = require('util').format;


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

router.post('/receiver',function(req,res){

    form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if (err) return res.end('formidable failed...')
        res.set('Access-Control-Allow-Origin', '*');
        var visualName = fields.name;
        if (files.file && files.file.name != "" && files.file.size > 0) {
            var name = getRandromTime(files.file.name);
            var targetPath = path.join(__dirname,'../public/imageBed/'+ name);
            var url = '/imageBed/'+name;

            // fs.rename(files.file.path, targetPath, function(err) {
            //     if (err) throw err;
            //     res.send({
            //         'res_code':'1',
            //         'file':targetPath,
            //         'url' : url
            //     });
            // });
        } else {
            res.send({
                'res_code':'0',
                'res_msg':'空文件or错误!'
            });
        }
    });
})

function getRandromTime(filename){
    var extName = path.extname(filename);
    return ~~(new Date().getTime()/1000)+''+~~(Math.random()*100)+extName;
}

module.exports = router;
