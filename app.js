/* app.js */

// require and instantiate express
var express = require('express');
const app = require('express')()

//to load img
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home')
})

// blog post
app.get('/up', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('up')
})

app.listen(8080)

console.log('listening on port 8080')
