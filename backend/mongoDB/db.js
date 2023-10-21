const mongoose = require('mongoose')
const MONGO_URI = "your_mongo_id "
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI)
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  
  }
}

module.exports = connectDB