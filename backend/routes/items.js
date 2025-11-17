const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const loggedIn = require('../middleware/loggedIn');

router.get('/:id', loggedIn, async (req, res, next) => {
    const url_data = Number(req.params.id);
    if (Number.isInteger(url_data)) {
        // TODO: retrieval from DB (task 2)
        const user_email = "abc@gmail.com";
        const item_data = {};

        res.status(200).send({item: item_data, email: user_email});
    } else {
        res.status(404).send({error: "Item ID not found.", id: url_data});
    }
});

module.exports = router;