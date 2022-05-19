const express = require('express');
const router = express.Router();
const { getGoals, setGoal } = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoal);

module.exports = router