// utils/db.js
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://gcbc:jNtFMMzhLwIylSZJ@cluster0.lkoaukl.mongodb.net/"; // Replace with your MongoDB URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  
  console.log("connected")
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;
