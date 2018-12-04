console.log('hello world')

/*modals inherited*/
var express = require('express')
var bosyParser = require('body-parser')
var path = require('path')
var app = express()
/*initiating the application*/
app.listen(3000,function(){
console.log('server stated on port 3000')
})

/*handle url*/
app.get('/', function(req,res){
	console.log('homepage')
	res.send('hello world')
})


/*creating a middleware*/
var logger = function(req, res, next) {
	console.log('logged...')
	next()
	}