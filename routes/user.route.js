const router = require('express').Router();

const {postUser, getAllUser, getUserByUsername} = require('../controllers/user.controller');
const {verifyAuth} = require('../middleware/verifyAuth');

router.post('/register', postUser);
router.get('/all', verifyAuth, getAllUser);
router.get('/:username', getUserByUsername);

module.exports = router;