import mongoose from 'mongoose';

const connectDB = async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
  }
  // Use new db connection
  await mongoose.connect("mongodb://localhost:27017/collegeShodh", {
    useNewUrlParser: true
  });
  console.log('MongoDB Connected');
 
};

export default connectDB;