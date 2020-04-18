const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

// ROUTES

// create a user
app.post('/users', async(req,res) => {
  try {
    const { username } = req.body
    const newUser = await pool.query(
      "INSERT INTO users (username) VALUES($1) RETURNING *", 
      [username]
    )

    res.json(newUser.rows[0])
  } catch(err) {
    console.error(err.message)
  }
})
// get all users

app.get('/users', async(req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users")
    res.json(allUsers.rows)
  } catch (err) {
    console.log(err.message)
  }
})

// get a user

app.get('/users/:id', async(req, res) => {
  try {
    const { id } = req.params
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id])

    res.json(user.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

// update status

app.put('/users/:id', async(req, res) => {
  try{
    const { id } = req.params
    const { status } = req.body
    const updateStatus = await pool.query("UPDATE users SET status = $1 WHERE id = $2", [status, id])

    res.json("Status was updated")
  } catch(err) {
    console.log(err.message)
  }
})

app.listen(5000, () => {
  console.log('server has started on port 5000')
})