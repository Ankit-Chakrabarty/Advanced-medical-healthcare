import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/ankit`).then(() => {
            console.log("Database connection successful")
        })
    } catch (error) {
        console.error(error)
    }

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.