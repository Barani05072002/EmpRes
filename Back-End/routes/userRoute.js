const express = require('express')
const {createUser,getAllUser,getSingleUser,updateUser,deleteUser,checkUser} = require('../controller/userController')

const router = express.Router();
router.post('/',checkUser);
router.get('/',getAllUser);
router.get('/:id',getSingleUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;