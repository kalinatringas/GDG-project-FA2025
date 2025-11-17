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

        // No DB access needed if user email is stored w item data
        res.status(200).send({item: item_data, email: user_email});
    } else {
        // TODO: is this the proper body to send back?
        res.status(404).send({error: "Item ID not found."});
    }
});

module.exports = router;