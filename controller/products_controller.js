module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.send(500).send({error: "Yikes! Looks like something went wrong. Better luck next time!"});
            console.log(err)
        })
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db')
        db.read_product(req.params.id).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.send(500).send({error: "Yikes! Looks like something went wrong. Better luck next time!"});
            console.log(err)
        })
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db')
        db.read_products().then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.send(500).send({error: "Yikes! Looks like something went wrong. Better luck next time!"});
            console.log(err)
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db')
        db.update_product(req.query.desc, req.params.id).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.send(500).send({error: "Yikes! Looks like something went wrong. Better luck next time!"});
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        db.delete_product(req.params.id).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.send(500).send({error: "Yikes! Looks like something went wrong. Better luck next time!"});
            console.log(err)
        })
    }
}