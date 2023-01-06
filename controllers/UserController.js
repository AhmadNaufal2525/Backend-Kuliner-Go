import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getUsers = async (req, res) => {
    try {
        const user = await Users.findAll({
            attributes:['id','email','username']
        });
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

 
export const getUsersById = async (req, res) => {
    try {
        const user = await Users.findAll({
            attributes:['username'],
            where: {
                id: req.params.id
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const Register = async(req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json ({
                error: err
            })
        }
        let user = new Users ({
            email: req.body.email,
            username: req.body.username,
            password: hashedPass
        })
    
        user.save()
        .then(user => {
            res.json({
                message : 'Register succesfully'
            })
        })
        .catch(error => {
            res.json({
                message : 'An error occured'
            })
        })
    })
}
 
export const Login = async(req, res) => {
    var email = req.body.email
    var password = req.body.password

    Users.findOne({$or : [{email:email},{password:password}]})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err,result) {
                if(err) {
                    req.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message:'Login Successful',
                        token
                    })
                } else {
                    res.json({
                        message: 'Wrong password'
                    })
                }
            })
        } else {
            res.json({
                message: 'User not found'
            })
        }
    })
}
