//testing authorization

// /api/test/all for public access
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

// /api/test/user for loggedin 
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};