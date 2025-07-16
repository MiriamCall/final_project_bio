import mongoose from "mongoose";

const MONGODB_URI = process.env.BIODROP_MONGO_CONNECTION_STRING;

async function dbConnect() {
  if (process.env.DISABLE_DB_DURING_BUILD === "true") {
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
