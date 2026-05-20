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
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})