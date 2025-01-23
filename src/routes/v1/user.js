const express = require('express');
const router = express.Router();

const UserController = require("../../controller/user-controller");

router.post('/register', UserController.create)
router.post('/login', UserController.login)
router.get('/me', UserController.me)
router.put('/user/:id', UserController.upadte)
router.delete('/user/delete/:id',UserController.deleteUser)

module.exports = router;