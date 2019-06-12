
const nombre = {
   demand: true,
   alias: 'n',
}

const id = {
   demand: true,
   alias: 'i',
}

const descripcion = {
   demand: true,
   alias: 'd',
}

const valor = {
   demand: true,
   alias: 'v',
}

const modalidad = {
   defauld: 'presencial',
   alias: 'm',
}

const intensidad = {
   defauld: 0,
   alias: 't',
}

const estado = {
   default: 'disponible',
   alias: 'e',
}

const creacion = {
   nombre,
   id,
   descripcion,
   valor,
   modalidad,
   intensidad,
   estado
}

const muestracurso = {
	nombre
}

const mostrarinscritos = {
   
}

const actualizar = {
   id
}

const argv11= require('yargs')
   .command('crear', 'crear curso alias', creacion)
   .command('mostrar', 'mostrar cursos disponibles')
   .command('mostrarcurso', 'muestra la informacion de un curso',muestracurso)
   .command('mostrarcursodisponible', 'muestra la informacion de un curso disponible',muestracurso)
   .command('mostrarcursosdisponibles','muestra todos los cursos con estado dispinible')
   .command('mostrarinscritos', 'muestra los inscritos en cada curso')
   .command('actualizar', 'actualiza el estado de un curso', actualizar)
   .argv

module.exports = {
   argv11
};
