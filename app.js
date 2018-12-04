console.log('hello world')

/*modals inherited*/
const express = require('express')
const app = express()
const port = 3000

var bosyParser = require('body-parser')
var path = require('path')

/*initiating the application*/
app.listen(3000,function(){
console.log('server stated on port 3000')
})

/*handle url*/
app.get('/', (req,res) => {console.log('homepage'); res.send('hello worlda')} )

// app.get('/', (req, res) => res.send('Hello World!'))

/*creating a middleware*/
var logger = function(req, res, next) {
	console.log('logged...')
	next()
	}



// app.listen(port, () => console.log(`Example app listening on port ${port}!`))