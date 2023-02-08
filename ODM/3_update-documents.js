require('./db/0_ddbb-connection')

const Dog = require('./models/dog.model')






// .findByIdAndUpdate()
// Dos argumentos: string con ID, y query de manipulación
// retorno: el elemento anterior al update
// El argumento adicional {new: true} hará que retorne el elemento tras el update


Dog
    .findByIdAndUpdate('63e3716e309da5d1bdbfd12c', { $inc: { age: 100 } }, { new: true })
    .then(dog => console.log("El perro modificado es:", dog))
    .catch(err => console.log('Hubo un error', err))






// .updateMany()
// Dos argumentos: query de búsqueda y query de actualización
// retorno: objeto con detalles de la operación

Dog
    .updateMany({ name: 'Popino' }, { age: 80 })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))







// .updateOne()
// Dos argumentos: query de búsqueda y query de actualización
// Retorn: objeto con detalles de la operación

Dog
    .updateOne({ name: 'Salchichonio' }, { name: 'Salchichonio reloaded' })
    .then(info => console.log("Los detalles de la modificación son:", info))
    .catch(err => console.log('Hubo un error', err))
