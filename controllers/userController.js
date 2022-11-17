const userModel = require("../models/userModel");
const { tambahDataValidation, updateDataValidation } = require("../validation/userValidation");

// ? Tambah Data 
const tambahData = async (req, res) => {
    const newUser = new userModel(req.body);

    // ? validation 
    const {error} = await tambahDataValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    
    try{
        const response = await newUser.save();
        const data = response;
        res.status(201).json({
            message: "Data berhasil dibuat",
            data,
        });
    } catch (error) {
        console.log(error);
    }
};

// ? get all Data
const getData = async (req, res) => {
    const cekData = await userModel.find();
    if (cekData.length == 0) {
        return res.status(400).json({
            message: "Data tidak ada",  
        });
    }


    try{
        const response = await userModel.find();
        const data = response;
        res.status(200).json({
            message: "Berikut ini adalah Datanya!",
            data,
        });
    } catch (error) {
        console.log(error);
    }
};


// ? Get Data By Id
const getDataById = async (req, res) => {
    const ambilReqId = req.params.id;

    try {
        const response = await userModel.findById({ _id: ambilReqId });
        if (!response) {
            return res.status(400).json({
                message: "Data dengan id tersebut tidak terdaftar!",
            });
        }
        const data = response;
        res.status(200).json({
            message: "Berikut ini adalah datanya!",
            data,
        });
    } catch (error) {
        console.log(error);
    }
};

// ? Update Data 
const updateData = async (req, res) => {
    const ambilReqId = req.params.id;

    // ? validation 
    const {error} = await updateDataValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const response = await userModel.findByIdAndUpdate({ _id: ambilReqId }, { $set: req.body });
        if (!response) {
            return res.status(400).json({
                message: "Data dengan id tersebut tidak terdaftar!",
            });
        }
        const dataSebelumnya = response;
        const dataSesudahnya = await userModel.findById({ _id: ambilReqId });
        res.status(201).json({
            message: "Data ini berhasil diubah",
            dataSebelumnya,
            dataSesudahnya,
        });
    } catch (error) {
        console.log(error);
    }
};

// ? Delete Data 
const deleteData = async (req, res) => {
    const ambilReqId = req.params.id;

    try {
        const response = await userModel.findByIdAndRemove({ _id: ambilReqId });
        if (!response) {
            return res.status(400).json({
                message: "Data dengan id tersebut tidak terdaftar!",
            });
        }
        const data = response;
        res.status(200).json({
            message: "Data ini berhasil dihapus",
            data,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    tambahData,
    getData,
    getDataById,
    updateData,
    deleteData,
};