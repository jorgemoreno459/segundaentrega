const nombre = {
    demand: true,
    alias: 'n',
}
const id = {
    demand: true,
    alias: 'i',
}
const correo = {
    demand: true,
    alias: 'c'
}
const telefono = {
    demand: true,
    alias: 't'
}
const creacion = {
    nombre,
    id,
    correo,
    telefono
}
const argv = require('yargs')
    .command('registrar', 'Generar lista de usuarios', creacion)
    .command('registrados', 'Listar los cursos disponibles')
    .argv

module.exports = {
    argv
};
