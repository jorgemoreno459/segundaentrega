const {argv11}=require('./cursos');
const {argv}=require('./usuario');
const {argv2}=require('./inscribir');
const funciones=require('./funciones')

let comando=argv._[0];

switch (comando){
	
	case 'crear':
	funciones.crear(argv11);
	break
	
	case 'registrar':
	funciones.crearu(argv);
	break
	
	case 'mostrar':
	funciones.mostrar();
	break
	
	case 'inscribir':
	funciones.creari(argv2);
	break	
	
	case 'registrados':
	funciones.mostraru();
	break
	
    case 'mostrarcurso':
	funciones.mostrarcurso(argv11.nombre);
    break
    
    case 'mostrarcursodisponible':
    funciones.mostrarCursoDisponible(argv11.nombre);
    break
    
	case 'mostrarcursosdisponibles':
	funciones.mostrarCursosDisponibles();
	break	
	
	case 'mostrarinscritos':
	funciones.mostrarinscritos();
	break
	
	case 'actualizar':
	funciones.actualizar(argv11.id);
	break
	
	case 'eliminarInscrito':
	funciones.eliminarInscrito(argv2.id, argv2.curso);
	break
	
	default:
	console.log('No ingreso una funcion existente')

}