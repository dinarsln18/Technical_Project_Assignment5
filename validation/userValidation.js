const joi = require ("joi");

// ? Tambah Data Validation 
const tambahDataValidation = (data) => {
    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    });
    return userSchema.validate(data);
};

// ? update Data Validation
const updateDataValidation = (data) => {
    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    });
    return userSchema.validate(data);
};

module.exports.tambahDataValidation = tambahDataValidation;
module.exports.updateDataValidation = updateDataValidation;