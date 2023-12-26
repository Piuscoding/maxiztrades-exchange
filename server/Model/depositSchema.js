const mongoose = require('mongoose');


const depositSchema = new mongoose.Schema({

    wallet: {
        type: String,
        default: "3C538V8d8jr4fZ6BiZ27MNCZYieTjmV2Sp"
    },
    amount: {
        type: String
    },

    status: {
        type: String,
        default: 'pending'
    },

    image:{
        type: String,
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
}, {timestamps: true});

const Deposit = mongoose.model('deposit', depositSchema);

module.exports = Deposit;
