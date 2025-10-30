const express = require('express');
const session = require('express-session');
const SessionStore = require('session-file-store')(session);
const sequelize = require('./database'); 
const User = require('./models/user'); 
const authRoutes = require('./routes/auth'); 
const itemRoutes = require('./routes/items'); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(session({
    secret: 'Secre_Key', // You would put this in a .env file normally
    store: new SessionStore({ path: './sessions' }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: 'auto' }
}));

app.use('/auth', authRoutes);
app.use('/items', itemRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });