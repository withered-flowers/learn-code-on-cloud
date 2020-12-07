// Copy paste code from readme.md

// import the express library
const express = require('express')
const app = express()

// sequelize model
const { book } = require('./models/index.js')

// using port 10000
// port 3000 has been used by internal GCP
const port = process.env.PORT || 10000

app.set('view engine', 'pug')

// define the endpoint

// GET /
app.get('/', async (req, res) => {
  const books = await book.findAll()
  res.render('index', { books })
})

// run the express server
app.listen(port, () => {
  console.log(`Application is running on port ${port}`)
})