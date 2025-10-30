const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// router.post('/register', async (req, res) => {
//     const { email, password } = req.body;

//     //Check if email ends with @ufl.edu
//     if (!email || !email.endsWith('@ufl.edu')) {
//         return res.status(400).json({ message: 'Registration requires a valid @ufl.edu email address.' });
//     }
//     try {
//         //Check for existing user
//         const existingUser = await User.findOne({ where: { email } });
//         if (existingUser) {
//             return res.status(409).json({ message: 'User with this email already exists.' });
//         }

//         //Hashing: Mandate a salt work factor of 10 or 12 (we will likely use 10 here)
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         //Save the new user
//         const newUser = await User.create({
//             email,
//             password: hashedPassword 
//         });

//         //Logs the new user in immediately
//         req.session.userId = newUser.id;

//         return res.status(201).json({ message: 'User registered and logged in successfully!', userId: newUser.id });

//     } catch (error) {
//         console.error('Registration error:', error);
//         return res.status(500).json({ message: 'Internal server error during registration.' });
//     }
// });

module.exports = router;