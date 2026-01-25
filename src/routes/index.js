const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.get('/', (req, res) => {
    res.redirect('/api-docs');
});
router.use('/books', require('./books'));
router.use('/authors', require('./authors'));

module.exports = router;
