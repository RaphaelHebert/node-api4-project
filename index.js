const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const server = express()
dotenv.config()

server.use(express.json())
server.use(cors())

const port = process.env.POST

const users = [
    {
        id: 1,
        name: "Joe",
        size: 182
    },{
        id: 2,
        name: "John",
        size: 175
    },{
        id: 3,
        name: "Louis",
        size: 164
    },{
        id: 4,
        name: "James",
        size: 192
    }
]
server.get('/', (req, res) => {
    res.status(200).send('<h2> This is for deployment </h2>')
})

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
    res.status(200).json({
        username: req.body.username, 
        password: req.body.password
    })
})

server.post('/api/login', (req, res) => {
    if(!req.body.username || !req.body.password){
        res.status(404).json({ message: "incorrect username or password" })
    }else{
        res.status(200).json({ message: "Welcome!" })
    }
})


server.get('*', (req, res) => {
    res.status(404).json({message: "not found"})
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})