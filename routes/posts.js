const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts')

router.get('/', postsCtrl.index)
router.get('/', postsCtrl.new)
router.post('/', postsCtrl.create)

module.exports = router;
