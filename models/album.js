const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const albumSchema = new Schema({
    title: String, 
    year: Number,
    genre: String, 
    tags: [String],
    tracks: [String]  
}, { timestamps: true });

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;