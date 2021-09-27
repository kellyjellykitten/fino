// look at the request to find the image id being requested
// need folder on backend to contain the images and probably the images.json
// once you have the image that is being requested
// file = thepath to the file you are returning


exports.getImage = (req, res, next) => {
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

