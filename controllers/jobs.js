const jobmodel = require("../models/jobs");

const createjob = async (req, res) => {
    const jobobj = req.body;
    const newobj = new jobmodel(jobobj);
    await newobj.save();
    console.log(req.body);
    res.json({
        success: true,
        message: "Job created sucessfully"
    })
}


const Listjob = async (req, res) => {
    const {minSalary, maxSalary} = req.query;

    const jobslist = await jobmodel.find({
        $and: [
            {
                salary: {$gte: minSalary},
            },
            {
                salary: {$lte: maxSalary},
            }
        ]
    });
    res.json({
        success: true,
        message: "Dummy Listjob a job",
        results: jobslist,
    })
}

const editjob = async (req, res) => {

    const jobId = req.params.id;
    await jobmodel.findByIdAndUpdate(jobId, req.body);

    res.json({
        success: true,
        message: "job edited succesfully"
    })
}

const deletejob = async (req, res) => {

    const jobid = req.body.params;
    await jobmodel.findByIdAndDelete(jobid);

    res.json({
        success: true,
        message: "Job Deleted Succesfully"
    })
}

const jobcontroller = {
    createjob,
    Listjob,
    editjob,
    deletejob,
};

module.exports = jobcontroller;