const Artist = require('../models/artist');
 const Upload = require('../helpers/upload'); // importa el helper
 const create = (req, res, next) =>
 Upload(req).then(input => Artist.create(input)) //utiliza el helper para subir una imagen   .then(result => res.status(200).json(result))   .catch(err => res.status(500).json({message: 'Error al crear artista'}))
 const read = (req, res, next) =>
 Artist.find(req.params.id ? {_id: req.params.id} : {})
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error al consultar artistas'}))
 const update = (req, res, next) =>
 Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error al actualizar artista'}))
 const destroy = (req, res, next) =>
  Artist.findByIdAndRemove(req.params.id)
   .then(result => res.status(200).json(result))

   .catch(err => res.status(500).json({message: 'Error al eliminar artista'}))

   module.exports = {
     create,   
      read,
       update,
       destroy }
