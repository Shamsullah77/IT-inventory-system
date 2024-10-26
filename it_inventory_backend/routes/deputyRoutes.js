const express = require('express');
const router = express.Router();
const deputyController = require('../controllers/deputyController');

router.get('/', deputyController.getAllDeputies);
router.post('/', deputyController.createDeputy);
router.get('/:id', deputyController.getDeputyById);

module.exports = router;
