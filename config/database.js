import mongoose from 'mongoose'

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    // If the database is already connected, don't connect
    if(connected) {
        console.log('mongodb is already connected...');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
        console.log('mongodb is connected ... ');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;