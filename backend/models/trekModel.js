const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: Number
});

const Trek = mongoose.model("Trek",trekSchema);

module.exports = Trek;