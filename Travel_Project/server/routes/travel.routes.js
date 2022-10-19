const TravelController = require('../controllers/travel.controller');
const { authenticate } = require('../config/jwt.config');

const routes = (app) => {
    // Create
    app.post('/api/travel', TravelController.create)

    // Read
    app.get('/api/travel',TravelController.getAll)
    app.get('/api/travel/:id',TravelController.getOne)

    // Update
    app.put('/api/travel/edit/:id',TravelController.updateOne)

    // Delete
    app.delete('/api/travel/:id',TravelController.deleteOne)
}

module.exports = routes