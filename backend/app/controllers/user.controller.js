//Controller for testing Authorization

//test for public access
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
 
//test for loggedin users
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};
  
