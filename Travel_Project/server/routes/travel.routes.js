const TravelController = require('../controllers/travel.controller')

const routes = (app) => {
    // Create
    app.post('/api/travel', TravelController.create)

    // Read
    app.get('/api/travel',TravelController.getAll)
    app.get('/api/travel/:id',TravelController.getOne)

    // Update


    // Delete
}

module.exports = routes