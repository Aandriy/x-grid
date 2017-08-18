var express = require('express');
var app = express();
var sourceData = require('./data');
var _ = require('lodash');



app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header("Access-Control-Allow-Origin", req.get('origin'));
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	if ('OPTIONS' == req.method) {
		res.send(200);
	} else {
		next();
	}
});
app.use(function (req, res, next) {
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
	res.header('Expires', '-1');
	res.header('Pragma', 'no-cache');
	next();
});

var todoRouter = express.Router();
app.use('/todo', todoRouter);

todoRouter.post('/', function (req, res) {
	var data = req.body;

	console.log(data);

	res.status(201).json({
		rows: 10,
		totalRows: sourceData.length,
		page: 1,
		totalPages: 1,
		data: sourceData
	});
});


app.listen(3333);
console.log('listening http://localhost:3333/');