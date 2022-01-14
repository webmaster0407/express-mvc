module.exports = {
    createCrud: () => {
        data = "Form data was inserted";
        return data;
    },
    fetchCrud: () => {
        data = "data was fetched";
        return data;
    },
    editCrud: (editData) => {
        data = "Data is edited by id : " + editData;
        return data;
    },
    updateCrud: (updateId) => {
        data = "Data was updated by id: " + updateId;
        return data;
    },
    deleteCrud: (deleteId) => {
        data = "Data was deleted by id: " + deleteId;
        return data;
    },
}