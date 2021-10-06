// look at the request to find the image id being requested
// need folder on backend to contain the images and probably the images.json
// once you have the image that is being requested
// file = thepath to the file you are returning
var path = require('path')
const fs = require('fs');


exports.getImage = (req, res, next) => {
   
    let rawdata = fs.readFileSync(path.resolve(__dirname, '../assets/images.json'));
    let images = JSON.parse(rawdata);
    console.log("Images:", images)

    var options = {
        root: path.join(__dirname, '../assets/images/'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    // console.log(options.root)
    console.log('id being requested', req.params.id)
    let file = images[req.params.id].filename
    console.log(file)
    res.sendFile(file, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log("Sent:", file)
            // res.status(200).send("image image image")
        }
    })  
}

exports.getImages = (req, res, next) => {
    // let rawdata = fs.readFileSync(path.resolve(__dirname, '../assets/images.json'));
    // let images = JSON.parse(rawdata);
    // console.log("Images:", images)

    var options = {
        root: path.join(__dirname, '../assets/'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    // console.log(options.root)
    let file = 'images.json'
    res.sendFile(file, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log("Sent:", file)
            // res.status(200).send("image image image")
        }
    })  
}

exports.getSingleImage = (req, res, next) => {
    var path = require('path')

    var options = {
        root: path.join(__dirname, '../assets/images/'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    console.log(options.root)
    let file = "gettyimages-4444-1024x1024.jpg"
    console.log(file)
    res.sendFile(file, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log("Sent:", file)
            // res.status(200).send("image image image")
        }
    })  
}

