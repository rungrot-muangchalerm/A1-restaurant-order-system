const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/api/me', (req, res) => {
    res.status(200).json({
        status: "200",
        role: "user"
    })
})

app.post('/api/register', (req, res) => {
    res.status(200).json({
        status: "200",
        message: "success"
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})