const express = require('express')
const app = express()
const { Client } = require('pg')
const config = require('./config.js')[process.env.NODE_ENV || 'dev']
const client = new Client({
    connectionString: config.connectionString
})
client.connect()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = config.port
const { response } = require('express')

//get all characters
app.get('/api/characters', (req, res) => {
    client.query("SELECT * FROM characters")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

//gets all amazon builds
app.get('/api/characters/amazon', (req, res) => {
    client.query("SELECT * FROM characters WHERE character_class = 'Amazon'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

//get all paladin builds
app.get('/api/characters/paladin', (req, res) => {
    client.query("SELECT * FROM characters WHERE character_class = 'Paladin'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

//get all sorceress builds
app.get('/api/characters/sorceress', (req, res) => {
    client.query("SELECT * FROM characters WHERE character_class = 'Sorceress'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

// get all barbarian builds
app.get('/api/characters/barbarian', (req, res) => {
    client.query("SELECT * FROM characters WHERE character_class = 'Barbarian'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

// get all favorited builds
app.get('/api/characters/favorite', (req, res) => {
    client.query("SELECT * FROM characters WHERE favorite = 'Yes'")
        .then(results => {
            if (results.rows.length === 0) {
                res.status(404)
            }
            res.send(results.rows)
        })
        .catch(error => {
            console.error(error)
        })
})

//update build to favorite
app.patch('/api/characters/setfavorite/:character_id', (req, res) => {
    let id = req.params.character_id
    client.query(`UPDATE characters SET favorite = 'Yes' WHERE character_id = $1`, [id])
        .then(results => {
            res.status(201).send(results)
        })
        .catch(error => {
            console.error(error)
        })
})
//remove build from favorite
app.patch('/api/characters/removefavorite/:character_id', (req, res) => {
    let id = req.params.character_id
    client.query(`UPDATE characters SET favorite = 'No' WHERE character_id = $1`, [id])
        .then(results => {
            res.status(201).send(results)
        })
        .catch(error => {
            console.error(error)
        })
})

//port listening
app.listen(PORT, () => {
    console.log('Server is running', PORT)
})