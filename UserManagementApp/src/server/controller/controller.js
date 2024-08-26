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

// retrieve and return all users 
exports.find = (req,res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error occured while retriving user information"})
        })
}

// retrieve and return single users 
exports.findtwo = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message:"Not found user with id" +id})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message:"Error retriving user with id" + id})
            })
    }
    else{
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message:err.message || "Error occured while retriving user information"})
    })
    }
    
}

// Update a new identified user by UserID
exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400).send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false, new:true})  // without new:true, This will output the previous state, not the new modified status
        .then(data => {
            if(!data){
            res.status(400).send({message:`Cannot Update user with ${id}. Maybe user not found`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message:"Erroe Update user information"})
        })
}

//Delete a user with specified userId
exports.delete = (req,res) =>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:`Cannot delete with id ${id}. Maybe id is wrong`})
            }
            else{
                res.send({message:"User was deleted successfully!"})
            }
        })
        .catch(err => {
            res.send(500).send({message:"Could not delete User with id=" +id});
        });
}