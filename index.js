const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('oi express<br>digite /oi depois de localhost')
})

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})

app.use('/oi' ,(req, res) => {
    res.send('oi')
    console.log('oi:)')
    console.log(req.method)
})