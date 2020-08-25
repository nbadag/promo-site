// https://jasoncote.co/deploy-production-build-create-react-app-to-heroku

const express = require('express')
const sslRedirect = require('heroku-ssl-redirect').default
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.use(sslRedirect(['production'], 301))

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)

console.log('Server running on port ' + PORT)
