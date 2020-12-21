const Cake = require('../models').Cake;


/**
 * 
 * List all cakes
 */
exports.cake_list = (req, res, next) => {
    Cake.findAll()
    .then( cakes => res.status(200).json(cakes))
    .catch( err => console.log(err) )
}

/**
 * 
 * Detail cake
 */
exports.detail_cake = (req, res, next) => {
    const id = req.params.id;
    Cake.findByPk(id)
    .then( cake => res.status(200).json(cake))
    .catch( err => console.log(err))
}

/**
 * 
 * Add a cake
 */
exports.add_cake = (req, res, next) => {
    const cake = req.body;
    Cake.create(cake)
    .then( cakeCreated => res.status(201).json(cakeCreated))
    .catch( err => console.log(err))
}

/**
 * 
 * Edit a cake
 */
exports.edit_cake = (req, res, next) => {
    const id = req.params.id;
    const cake = req.body;
    Cake.update(cake, {
        where: {
            id: id
        }
    })
    .then( cakeEdited => res.status(201).json(cakeEdited))
    .catch( err => console.log(err))
}

/**
 * 
 * Delete a cake
 */
exports.delete_cake = (req, res, next) => {
    const id = req.params.id;
    Cake.destroy({
        where: {
            id: id
        }
    })
    .then( cakeDeleted => res.status(200).json({ message: `cake deleted ${cakeDeleted}`}))
    .catch( err => console.log(err))
}