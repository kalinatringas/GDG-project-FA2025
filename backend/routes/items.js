const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
<<<<<<< HEAD
const loggedInTEMP = require('../middleware/TEMP');

router.get('/:id', loggedInTEMP, async (req, res, next) => {
    // TASK 2: 
    // get item
    // get user email from item
    const user_id = undefined;
    const item_data = {};


    // ID field needs to be defined in DB/user.js; current properties are only email and pass
    // would using email be better to fetch user?
    const user = await User.findOne({ where: { user_id } });
    res.status(200).send({item: item_data, email: user.email});
=======
const Item = require('../models/item');
const loggedIn = require('../middleware/loggedIn');

router.get('/:id', loggedIn, async (req, res, next) => {
    const url_data = Number(req.params.id);
    if (Number.isInteger(url_data)) {
        const item = await Item.findOne({where: {itemID: url_data}});
        if (item) {
            const user_email = await User.findOne({where: {userID: item.userID}});
            if (user_email) {
                res.status(200).send({item: item, email: user_email});
                return;
            }
        }
    }
    res.status(404).send({error: "Item ID not found.", id: url_data});
>>>>>>> 1c58a6051c7c2a996955869cd35ad70b6db98a62
});

module.exports = router;