const express = require("express");

const router = express.Router();

const jobcontroller = require("../controllers/jobs")

router.post("/api/jobs", jobcontroller.createjob);

router.get("/api/jobs", jobcontroller.Listjob);

router.put("/api/jobs/:id", jobcontroller.editjob);

router.delete("/api/jobs/:id", jobcontroller.deletejob);

module.exports = router;