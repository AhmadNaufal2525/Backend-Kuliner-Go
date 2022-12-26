import User from "../models/UserModel.js";

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body)
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}
export const userLogin = async(req, res) => {
    try {
        await User.findAll({
            where:{
                email: req.body.email
            }
        });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}