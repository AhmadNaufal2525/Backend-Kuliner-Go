import Booked from "../models/BookingModel.js";
 
export const getAllBooking = async (req, res) => {
    try {
        const booked = await Booked.findAll();
        res.json(booked);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getBookedById = async (req, res) => {
    try {
        const booked = await Booked.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(booked[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const addBooked = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const date = req.body.date;
    const address = req.body.address;
    const people = req.body.people;
    const payment = req.body.payment;

    try {
        await Booked.create({firstname:firstname, lastname:lastname, email:email, date:date, address:address, people:people, payment:payment});
        res.status(201).json({msg: "Booking Berhasil!"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateBooked = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const date = req.body.date;
    const address = req.body.address;
    const people = req.body.people;
    const payment = req.body.payment;
    const book = await Booked.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!book) return res.status(404).json({msg: "Data tidak ditemukan!"});
    try {
        await Booked.update({firstname:firstname, lastname:lastname, email:email, date:date, address:address, people:people, payment:payment},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Update booking sukses!"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteBooked = async (req, res) => {
    const book = await Booked.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!book) return res.status(404).json({msg: "Data tidak ditemukan!"});
    try {
        await Booked.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Delete data booking berhasil"});
    } catch (error) {
        console.log(error.message);
    }
}