const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    console.log(id);
});

module.exports = router;