const mongoose = require('mongoose');
//here we are importing mongoose and makng a schema for the url

const urlSchema = new mongoose.Schema({
    shortId: { // jaise yeh shortId hai waise hi humne yeh shortId banaya hai controllers mein with same name 
        //the name matters here because we are using it in the controllers
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },

    totalClicks: {
        type: Number,
        default: 0
    }, 

    VisitHistory: [{timestamp: {type: Number}}]

},
{timestamps: true}
);

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;  