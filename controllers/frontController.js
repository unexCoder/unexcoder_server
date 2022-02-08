const Album = require('../models/album');

// render_home
const render_home = (req,res) => {
    res.render('index',{title:'\\unexCoder Server'})
}
// render-data
const render_data = (req,res) => {
    res.render('data', {title:'\\unexCoder Server'});  
}
// render-music
const render_music = (req,res) => {
    Album.find().sort({createdAt:-1})
    .then((result) => {
        res.render('music/index',{title:'\\unexCoder | Albums', data: result})
    })
    .catch((err) => console.log(err))
}
// render-album-details
const render_album_details = (req,res) => {
    const id = req.params.id;
    Album.findById(id)
        .then((result) => {
            res.render('music/details',{title:'\\unexCoder | Albums', data: result})    
    })
    .catch((err) => console.log(err))
}
// render-about
const render_about = (req,res) => {
    res.render('about',{title:'\\unexCoder Server | About'});
}
// render-404
const render_404 = (req,res) => {
    res.status(404).render('404',{title:'Not Found'});
}

module.exports =  {render_home,render_data,render_music,render_album_details,render_about,
render_404}