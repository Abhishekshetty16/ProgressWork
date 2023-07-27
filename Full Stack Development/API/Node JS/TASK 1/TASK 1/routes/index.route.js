const express = require("express");
const firstSpIndex = require("./sp.route")

const router = express.Router();

router.use("/first", firstSpIndex);

module.exports = router;
