import Resto from "../models/RestoModel.js";
import path from "path";
import fs from "fs";
export const getAllResto = async (req, res) => {
    try {
        const resto = await Resto.findAll();
        res.json(resto);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getRestoById = async (req, res) => {
    try {
        const resto = await Resto.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(resto[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const addResto = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "Tidak ada gambar yang diupload"});
    const name = req.body.name;
    const about= req.body.about;
    const location= req.body.location;
    const jarak= req.body.jarak;
    const rate= req.body.rate;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];
 
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Image"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Ukuran image harus kurang dari 5 MB"});
 
    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Resto.create({name: name, about:about, location: location, jarak: jarak, rate: rate, image: fileName, url: url});
            res.status(201).json({msg: "Data Restoran Berhasil Ditambahkan!"});
        } catch (error) {
            console.log(error.message);
        }
    })
 
}
 
export const updateResto = async(req, res)=>{
    const resto = await Resto.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!resto) return res.status(404).json({msg: "Data tidak ditemukan!"});
     
    let fileName = "";
    if(req.files === null){
        fileName = resto.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
 
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Image"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Ukuran image harus kurang dari 5 MB"});
 
        const filepath = `./public/images/${resto.image}`;
        fs.unlinkSync(filepath);
 
        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.name;
    const about = req.body.about;
    const location= req.body.location;
    const jarak= req.body.jarak;
    const rate= req.body.rate;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
     
    try {
        await Resto.update({name: name, about:about, location: location, jarak: jarak, rate: rate, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Update product sukses!"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteResto = async(req, res)=>{
    const resto = await Resto.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!resto) return res.status(404).json({msg: "Data tidak ditemukan!"});
 
    try {
        const filepath = `./public/images/${resto.image}`;
        fs.unlinkSync(filepath);
        await Resto.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Delete data restoran berhasil"});
    } catch (error) {
        console.log(error.message);
    }
}