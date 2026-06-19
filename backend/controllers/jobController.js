const Job = require("../models/Job");
const extractSkills = require("../utils/skillExtractor");

const createJob = async(req,res)=>{

    try{

        const {title,description} = req.body;

        const skills =
            extractSkills(description);

        const job = await Job.create({

            title,
            description,
            requiredSkills:skills
        });

        res.status(201).json(job);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports = {
    createJob
};