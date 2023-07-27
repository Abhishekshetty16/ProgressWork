const express = require("express");

const firstSpRoute = require("../controller/sp.controller");

// const hello = require("../services/sp.service");


const router = express.Router();

//first SP

router.get("/call", firstSpRoute.firstSpContro);

router.get("/get", firstSpRoute.secondSpContro);

// router.get("/get", hello.secondQuery);



module.exports = router;
