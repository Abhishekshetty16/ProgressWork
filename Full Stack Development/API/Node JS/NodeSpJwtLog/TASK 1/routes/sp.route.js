const express = require("express");

const firstSpRoute = require("../controller/sp.controller");

const router = express.Router();

//first SP

//http://localhost:8000/abhidemo/first/call?name=Abhishek3.shetty
router.get("/call", firstSpRoute.firstSpContro);

// Second SP
//http://localhost:8000/abhidemo/first/get
//jwt verify
//[{"key":"gfg_token_header_key","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaXNoZWszLnNoZXR0eSIsImlhdCI6MTY5MDI4MDc2NywiZXhwIjoxNjkwMzY3MTY3fQ.dK-DFSvrNALAyzVEXNMmCxeXnGesH1E29af16hgKRWA","description":"","type":"default","enabled":true}]
router.get("/get", firstSpRoute.secondSpContro);

module.exports = router;
