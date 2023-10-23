const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userId:{
        type: String,
        required: true

    },
    Title:{
        type: String,
        required: true
    },
    newsBody:{
        type: String,
        required: true
    },
    UserProfile:{
        type: String,
        required: true

    },
    UserName:{
        type: String,
        required: true

    },
    RecordingId:{
        type: String,
        required: true

    },
    views:{
        type: Number,
        required: true,
         default:0
    },
    Votes:{
        type: Number,
        required: true,
         default:0
    },
   likes:[String],
   profileComment:[String],
   Comment:[String],
   NameComment:[String],
    Date:{
        type: Date,
        required: true,
        default:Date.now

    }

})

const UserModel=mongoose.model('recordings',UserSchema);

module.exports=UserModel;