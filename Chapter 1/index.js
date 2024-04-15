const express = require('express')
const MOCK_DATA = require('./MOCK_DATA.json')
const PORT = 8000
const app = express()

app.get('/api/users', (req, res) => {
    // console.log(MOCK_DATA)
    res.send(MOCK_DATA)
})

app.get('/api/user/:id', (req, res) => {
    let id = Number(req.params.id);
    let userData = MOCK_DATA.find((user) => user.id === id)
    res.send(userData)
})

app.listen(PORT, () => {
    console.log(`Lisining on port ${PORT}`);
})