const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const loggedIn = require('../middleware/loggedIn');

router.get('/:id', loggedIn, async (req, res, next) => {
    // TASK 2: 
    // get item
    // get user email from item
    const user_id = 0;
    const item_data = {};


    // ID field needs to be defined in DB/user.js; current properties are only email and pass
    // would using email be better to fetch user?
    const user = await User.findOne({ where: { user_id } });
    res.status(200).send({item: item_data, email: user.email});
});

module.exports = router;