const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

// Route to add or update a bill
router.post('/', billController.addOrUpdateBill); // Use addOrUpdateBill to match the function name in billController

// Route to get bills for a specific user
router.get('/:pid', billController.getBillsByUser);

module.exports = router;
