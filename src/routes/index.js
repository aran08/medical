const express = require("express");
const router = express.Router();

const V1Apiroutes = require("./v1/index");

router.use("/v1", V1Apiroutes);

module.exports = router;
