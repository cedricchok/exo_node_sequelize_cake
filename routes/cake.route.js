const express = require('express');
const router = express.Router();

const cakeController = require('../controllers/cake.controller');

router.get('/', cakeController.cake_list);
router.get('/:id', cakeController.detail_cake);
router.post('/', cakeController.add_cake);
router.put('/:id', cakeController.edit_cake);
router.delete('/:id', cakeController.delete_cake);

module.exports = router;