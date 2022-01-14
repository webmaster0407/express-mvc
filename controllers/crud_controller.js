const crudModel = require('../models/crud_model');

module.exports = {

    curdForm: (req, res) => {
        res.render('crud_operation');
    },

    createCrud: (req, res) => {
        const createData = crudModel.createCrud();
        res.send("<h1>" + createData + "</h1>");
    },

    fetchCrud: (req, res) => {
        const fetchData = crudModel.fetchCrud();
        res.send("<h1>" + fetchData + "</h1>");
    },

    editCrud: (req, res) => {
        const editId = req.params.id;
        const editData = crudModel.editCrud(editId);
        res.render('crud-operation', {
            editData: editData,
            editId: editId
        });
    },

    updateCrud: (req, res) => {
        const updateId = req.params.id;
        const updateData = crudModel.updateCrud(updateId);
        res.send("<h1>" + updateData + "</h1>");
    },

    deleteCrud: (req, res) => {
        const deleteId = req.params.id;
        const deleteData = crudModel.deleteCrud(deleteId);
        res.send("<h1>" + deleteData + "</h1>");
    }
};