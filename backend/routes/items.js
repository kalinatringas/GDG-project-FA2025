const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const loggedInTEMP = require('../middleware/TEMP');

router.get('/:id', loggedInTEMP, async (req, res) => {
    const id = req.params.id;
    // get-item logic here
    
});

module.exports = router;