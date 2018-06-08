const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.render('index')
})

const port = 80
app.listen(80, () => {
  console.log(`Server is listening on port ${port}...`);
})
