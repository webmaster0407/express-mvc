const express = require('express');
const crudController = require('../controllers/crud_controller');
const router = express.Router();

router.get('/form', crudController.curdForm);

router.post('/create', crudController.createCrud);

router.get('/fetch', crudController.fetchCrud);

router.get('/edit/:id', crudController.editCrud);

router.post('/edit/:id', crudController.updateCrud);

router.get('/delete/:id', crudController.deleteCrud);

module.exports = router;