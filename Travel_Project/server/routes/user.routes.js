const { register, login, logout } = require('../controllers/user.controller');

module.exports = (app) => {
    app.post("/api/register", register);
    app.post('/api/login', login);
    app.get('/api/logout', logout);
};