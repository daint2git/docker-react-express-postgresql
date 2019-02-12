const express = require('express')
const cors = require('cors')

const productRouter = require('./productRouter')

const app = express()
const server_port = process.env.SERVER_PORT || 9696
const client_host = process.env.CLIENT_HOST || 'localhost'
const client_port = process.env.CLIENT_PORT || 6969

// for parsing application/json
app.use(express.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    credentials: true,
    origin: `http://${client_host}:${client_port}`,
  }),
)

app.use('/api/products', productRouter)

app.get('/', (req, res) => res.send('DaiNT2 - Hello server!'))

app.listen(server_port, () => console.log(`Server listening on port ${server_port}`))
