module.exports = {
    getHouses: (req, res) => {
        let db = req.app.get('db')
        db.get_houses().then(response => {
            res.status(200).send(response)
        })
    },

    addHouse: (req, res) => {
        let db = req.app.get('db')
        let { name, address, city, state, zip, img, monthlyMortgage, desiredRent } = req.body
        db.add_house(name, address, city, state, zip, img, monthlyMortgage, desiredRent).then(response => {
            res.status(200).send(response)
        })
    },

    deleteHouse: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.delete_house(id).then(response => {
            res.status(200).send(response)
        })
    }
}