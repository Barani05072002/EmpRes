const express = require('express')
const {createEmp,getAllEmp,getSingleEmp,updateEmp,deleteEmp} = require("../controller/empContoller")
const {getByName,
    getByMail,
    getByDate,
} = require('../controller/sortController')

const router = express.Router();

router.post('/',createEmp);

router.get('/',getAllEmp);
router.get('/name',getByName);
router.get('/email',getByMail);
router.get('/date',getByDate);
router.get('/:id',getSingleEmp);


router.patch('/:id',updateEmp);
router.delete('/:id',deleteEmp);


module.exports = router;