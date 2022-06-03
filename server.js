const express = require('express')
const app = express()

const PORT = 4444

app.get('/about-us', (req, res) => {
  console.log('----Headers-----\n', req.headers)
  res.json({ CodezUp: "Code The Way Up" })
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})