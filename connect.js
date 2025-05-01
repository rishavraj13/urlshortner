// const mongoose = require('mongoose');
// const Url = require('./models/url');

// async function connectDB() {
//     return mongoose.connect(Url);
// }

// module.exports = connectDB; 


// const mongoose = require('mongoose');
// require('dotenv').config(); // Ensure environment variables are loaded


// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/urlShortener", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("MongoDB Connected Successfully!");
//     } catch (error) {
//         console.error(`MongoDB Connection Error: ${error.message}`);
//         process.exit(1); // Exit process on failure
//     }
// }

// module.exports = connectDB;



const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
