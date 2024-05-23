const mongoose = require("mongoose");


const jobsschema = new mongoose.Schema ({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    company:{
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    },
    salary:{
        type: Number,
        require: false,
        default: 0,
    },
});

const jobmodel = mongoose.model("jobs", jobsschema);

module.exports = jobmodel;