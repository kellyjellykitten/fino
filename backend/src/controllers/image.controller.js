// look at the request to find the image id being requested
// need folder on backend to contain the images and probably the images.json
// once you have the image that is being requested
// file = thepath to the file you are returning


exports.getImage = (req, res, next) => {
    // let file = req
    let file = require("../assets/images/gettyimages-4444-1024x1024.jpg")
    res.sendFile(file, function (err) {
        if (err) {
            next(err)
        } else {
            console.log("Sent:", file)
            res.status(200).send("image image image")
        }
    })  
}

