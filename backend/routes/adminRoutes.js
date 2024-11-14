const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to fetch a user by Patient ID
router.get('/get-user/:pid', adminController.getUserById);

// Route to update a user by Patient ID
router.put('/update-user/:pid', adminController.updateUserById);

// Route to add a new user
router.post('/add-user', adminController.addUser);


module.exports = router;
