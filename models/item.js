const mongoose = require('mongoose');
const Shema = mongoose.Schema ;

const   ItemShema = new Shema({

    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Item = mongoose.model('Item', ItemShema);