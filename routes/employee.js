const express = require('express');
const router=express.Router();
const employeeModule=require('../Module/employeemodule');

router.post('/saveemployee',employeeModule.postemployee);
router.get('/getemployee',employeeModule.getemployee);
router.patch('/updateemployee/:employeeId',employeeModule.updateemployee);
router.delete('/deleteemployee/:employeeId',employeeModule.deleteemployee);

module.exports = router;