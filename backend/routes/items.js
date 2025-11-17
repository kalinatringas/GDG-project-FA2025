const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Item = require('../models/item');
const loggedIn = require('../middleware/loggedIn');

router.get('/:id', loggedIn, async (req, res, next) => {
    const url_data = Number(req.params.id);
    if (Number.isInteger(url_data)) {
        const item = await Item.findOne({where: {itemID: url_data}});
        const user_email = await User.findOne({where: {userID: item.userID}});
        if (item && user_email) {
            res.status(200).send({item: item, email: user_email});
            return;
        }
    }
    res.status(404).send({error: "Item ID not found.", id: url_data});
});

module.exports = router;