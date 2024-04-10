const express = require('express');
const routes = express.Router();

const localStorageController = require('./../controllers/localStorageController');

routes.get('/get',localStorageController.get);
routes.post('/create',localStorageController.create);
routes.get('/getall/:id',localStorageController.getAll);
routes.put('/update/:id',localStorageController.update);
routes.delete('/delete/:id',localStorageController.delete);

module.exports = routes;