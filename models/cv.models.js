const { default: mongoose}= require("mongoose");

const cvSchema = mongoose.Schema({
    profile:{
        type: String
    },
    fieldofstudy:{
        type: String
    },
    graduationyear:{
        type: String
    },
    qualification:{
        type: String
    },
    schoollocation:{
        type: String
    },
    schoolname:{
        type: String
    },
    city:{
        type: String
    },
    country:{
        type: String
    },
    desc:{
        type: String
    },
    email:{
        type: String
    },
    employer:{
        type: String
    },
    enddate:{
        type: String
    },
    firstname:{
        type: String
    },
    jobtitle:{
        type: String
    },
    lastname:{
        type: String
    },
    phone:{
        type: Number
    },
    postalcode:{
        type: Number
    },
    skills:{
        type: [String]
    },
    startdate:{
        type: String
    },
    summary:{
        type: String
    }
})

module.exports= mongoose.model("nomad",cvSchema)