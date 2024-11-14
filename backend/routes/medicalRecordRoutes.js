const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

// Route to get all medical records
router.get('/', medicalRecordController.getAllRecords);

// Route to add or update a medical record
router.post('/', medicalRecordController.addOrUpdateRecord);

module.exports = router;
