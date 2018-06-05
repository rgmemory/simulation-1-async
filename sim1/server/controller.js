module.exports = {
    getShelves: function(req, res){
        req.app.get('db').get_shelves().then(shelves => {
            console.log('yo')
            res.send(shelves);
        })
    },

    getShelf: function(req, res){
        console.log("shelf hit", req.params.id)
        req.app.get('db').get_shelf([req.params.id]).then(shelf => {
            res.send(shelf);
        })
    },

    getBin: function(req, res){
        console.log('getbin')
    }
}