import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( "mongodb+srv://system:system@stack-overflow.u457nmh.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
