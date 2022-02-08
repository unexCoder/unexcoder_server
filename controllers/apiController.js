const Album = require('../models/album');

// get_albums
const get_albums = (req,res) => {
    Album.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
}

// get_albums_by_id
const get_albums_by_id = (req,res) => {
    const id = req.params.id;
    Album.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
}

// get_albums_by_title
const get_albums_by_title = (req,res) => {
    const title = req.params.title;
    Album.find({title: title})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
}

// get_albums_by_year
const get_albums_by_year = (req,res) => {
    const year = req.params.year;
    Album.find({year:year})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
}

// get_albums_by_tags
const get_albums_by_tags = (req,res) => {
    const tags = req.query.tags;
    Album.find( { tags : { $in : tags } })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
}

// post_album
const post_album = (req,res) => {
    const album = new Album(req.body);
    album.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
}

// update_album
const update_album = (req,res) => {
    const id = req.params.id;
    Album.findByIdAndUpdate(id,req.body)
    .then((result) => {
            res.send('updated object with id: '+id);
        })
        .catch((err) => console.log(err))
    }
    
    // delete_album
    const delete_album = (req,res) => {
        const id = req.params.id;
        Album.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted object with id: '+id);
        })
        .catch((err) => console.log(err))
}

module.exports = {get_albums,get_albums_by_id,get_albums_by_title,get_albums_by_year,
get_albums_by_tags,post_album,update_album,delete_album}