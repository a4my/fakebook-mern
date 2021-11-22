// Imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const conversationRoute = require('./routes/conversations')
const messageRoute = require('./routes/messages')
const path = require('path')

// Connecting App to Express
const app = express()

// DotEnv config
dotenv.config()

// MongoDB connection config
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB')
  }
)

app.use('/images', express.static(path.join(__dirname, 'public/images')))

// Middleware config
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// Storage destination for post file upload
const storagePost = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

// Share a file in a post
const upload = multer({ storage: storagePost })
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploaded successfully')
  } catch (error) {
    console.error(error)
  }
})

//Routers
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)

// Express listener
app.listen(8800, () => {
  console.log('Backend server is running!')
})
