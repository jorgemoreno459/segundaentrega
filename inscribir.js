const nombre = {
    demand: true,
    alias: 'n',
}
const id = {
    demand: true,
    alias: 'i',
}
const curso = {
    demand: true,
    alias: 'c',
}
const creacion = {
    nombre,
    id,
    curso
}
const eliminacion = {
    id,
    curso
}
const argv2 = require('yargs')
    .command('inscribir', 'Inscribir estudiante en zona de espera de cupos', creacion)
    .command('inscritos', 'Mostrar estudiantes inscritos')
    .command('eliminarInscrito', 'Elimina la inscripción de un estudiante en un curso', eliminacion)
    .argv

module.exports = {
    argv2
};
