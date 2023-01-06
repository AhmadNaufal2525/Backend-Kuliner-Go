import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll({
            attributes:['id','email','username']
        });
        res.json(admin);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findAll({
            attributes:['username'],
            where: {
                id: req.params.id
            }
        });
        res.json(admin[0]);
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
        let admin = new Admin ({
            username: req.body.username,
            password: hashedPass
        })
    
        admin.save()
        .then(admin => {
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
    var username = req.body.username
    var password = req.body.password

    Admin.findOne({$or : [{username:username},{password:password}]})
    .then(admin => {
        if(admin) {
            bcrypt.compare(password, admin.password, function(err,result) {
                if(err) {
                    req.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({username: admin.username}, 'verySecretValue', {expiresIn: '1h'})
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
                message: 'Admin not found'
            })
        }
    })
}
