const firstC = require('../Controller/first.Controller');
const express = require('express');

const router = express.Router();

router.get('/get',firstC.fController);

module.exports = router
