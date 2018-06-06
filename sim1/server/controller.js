module.exports = {
    getShelves: function(req, res){
        req.app.get('db').get_shelves().then(shelves => {
            res.send(shelves);
        })
    },

    getShelf: function(req, res){
        req.app.get('db').get_shelf([req.params.id]).then(shelf => {
            res.send(shelf);
        })
    },

    getBin: function(req, res){
        req.app.get('db').get_bin([req.params.shelf_id, req.params.bin_id]).then(bin => {
            res.send(bin)
        })
    },

    editBin: function(req, res){
        req.app.get('db').edit_bin([req.params.shelf_id, req.params.bin_id, req.body.name, req.body.price]).then(bin => {
            res.send(bin);
        })
    },

    addItem: function(req, res){
        req.app.get('db').add_bin([req.params.shelf_id, req.params.bin_id, req.body.name, req.body.price]).then(bin => {
            //////////
        })
    },
    
    deleteItem: function(req, res){
        req.app.get('db').delete_bin([req.params.shelf_id, req.params.bin_id]).then(shelf => {
            ////////
        })
    }
}