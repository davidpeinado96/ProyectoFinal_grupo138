const models = require('../models');

exports.list = async (req, res, next) => {
    try {
        const registro = await models.Categoria.findAll();
        // 200 indica que la respuesta fue correcta
        if(registro){
            res.status(200).json(registro);
        }else{
            res.status(404).send({
                message: 'No hay categorías registradas'
            })
        }

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.add = async (req, res, next) => {
    try {
        const registro = await models.Categoria.create(req.body);
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.update = async (req, res, next) => {
    try {
        const registro = await models.Categoria.update({nombre:req.body.nombre,descripcion:req.body.descripcion},
            {
               where:{
                   id: req.body.id
               } 
            });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.activate = async (req, res, next) => {
    try {
        const registro = await models.Categoria.update({estado:1},
            {
               where:{
                   id: req.body.id
               } 
            });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};

exports.deactivate = async (req, res, next) => {
    try {
        const registro = await models.Categoria.update({estado:0},
            {
               where:{
                   id: req.body.id
               } 
            });
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error)
    }
};


