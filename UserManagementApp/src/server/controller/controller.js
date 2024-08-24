var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occured while creating a create operation"
            });
        });
}

// retrieve and return all users / retrieve and return single users
exports.find = (req,res) => {

}

// Update a new identified user by UserID
exports.update = (req,res) => {

}

//Delete a user with specified userId
exports.delete = (req,res) =>{

}