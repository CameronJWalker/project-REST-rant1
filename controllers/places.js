const app = require('express').Router()
app.get('/new', (req, res) => {
  res.render('places/new')
})
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/creperymenu.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/thecrepery.jpg'
      }]
      res.render('places/index', { places })
    })
    app.post('/', (req, res) => {
      console.log(req.body)
      res.send('POST /places')
    })
    

module.exports = app