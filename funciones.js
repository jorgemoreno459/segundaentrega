const fs = require('fs');
listaCursos = [];
listaUsuarios = [];
listaInscritos = [];

const crear = (curso) => {
    listar();
    let cur = {
        nombre: curso.nombre,
        id: curso.id,
        descripcion: curso.descripcion,
        valor: curso.valor,
        modalidad: curso.modalidad,
        intensidad: curso.intensidad,
        estado: curso.estado
    };

    let duplicado = listaCursos.find(nom => nom.id == curso.id)
    if (!duplicado) {
        listaCursos.push(cur);
        console.log(listaCursos);
        guardar();
    }
    else
        console.log('ya existe ese id, no se puede crear el curso')
}

const crearu = (usuario) => {
    listaru();
    let ur = {
        nombre: usuario.nombre,
        id: usuario.id,
        correo: usuario.correo,
        telefono: usuario.telefono
    };

    let duplicado = listaUsuarios.find(nom => nom.id == usuario.id)
    if (!duplicado) {
        listaUsuarios.push(ur);
        console.log(listaUsuarios);
        guardaru();
    }
    else
        console.log('ya existe esa identificacion en la base de datos')
}

const creari = (usuario) => {
    listaru();
    listar();
    let cur = listaCursos.find(existe => existe.nombre == usuario.curso && existe.estado == "disponible")
    if (!cur) {
        console.log('El curso solicitado no esta disponible')
    } else {
        let est = listaUsuarios.find(buscar => buscar.id == usuario.id && buscar.nombre == usuario.nombre)
        if (!est) {
            console.log('no se encuentra matriculado este estudiante')
        } else {
            listari();
            let ur = {
                nombre: usuario.nombre,
                id: usuario.id,
                curso: usuario.curso
            };
        
            let duplicado = listaInscritos.find(nom => nom.curso == usuario.curso && nom.nombre == usuario.nombre)
            if (!duplicado) {
                listaInscritos.push(ur);
                console.log(listaInscritos);
                console.log('Te has inscrito exitosamente al curso solicitado')
                guardari();
            } else
                console.log('Ya estas matriculado a ese curso')
        }
    }
}

const listaru = () => {
    try {
        listaUsuarios = require('./listadou.json');
    } catch (error) {
        listaUsuarios = [];
    }
}

const listar = () => {
    try {
        listaCursos = require('./listado.json');
    } catch (error) {
        listaCursos = [];
    }
}

const listari = () => {
    try {
        listaInscritos = require('./listadoi.json');
    } catch (error) {
        listaInscritos = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo de cursos.txt ')
    });
}

const guardaru = () => {
    let datos = JSON.stringify(listaUsuarios);
    fs.writeFile('listadou.json', datos, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo de usuarios.txt ')
    });
}

const guardari = () => {
    let datos = JSON.stringify(listaInscritos);
    fs.writeFile('listadoi.json', datos, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo de inscritos.txt ')
    });
}

const mostrar = () => {
    listar()
    console.log('Los cursos disponibles son:' + "\n")
    listaCursos.forEach(curso => {
        console.log('El nombre del curso es: ' + curso.nombre);
        console.log(' Descripcion: ' + curso.descripcion);
        console.log(' El valor a pagar para matricular el curso es: ' + curso.valor + "\n")
    });
}

const mostraru = () => {
    listaru()
    console.log('Los estudiantes registrados son:' + "\n")
    listaUsuarios.forEach(usuario => {
        console.log('El nombre del usuario es: ' + usuario.nombre);
        console.log('Su identificacion es: ' + usuario.id);
        console.log('Su correo electronico es: ' +usuario.correo);
        console.log('Su telefono es: ' + usuario.telefono +  "\n")
    });
}

const mostrarcurso = (nom) => {
    listar()
    let cur = listaCursos.find(buscar => buscar.nombre == nom)
    if (!cur) {
        console.log('no existe este curso en nuestra base de datos')
    }
    else {
        console.log('Descripcion del curso: ' + cur.descripcion);
        console.log('Modalidad: ' + cur.modalidad);
        console.log('Intensidad horaria: ' + cur.intensidad + "\n")
    }
}

const mostrarCursosDisponibles = () => {
    listar()
    let disponibles = listaCursos.filter(est => est.estado == 'disponible')
    if (disponibles.lenght == 0) {
        console.log('no hay ningun curso disponible')
    }
    else
        console.log('Los cursos disponibles son: ' + "\n")
    disponibles.forEach(curso => {
        console.log('Nombre del curso: '+ curso.nombre);
        console.log('Descripcion del curso: ' + curso.descripcion);
        console.log('Modalidad: ' + curso.modalidad);
        console.log('Intensidad horaria: ' + curso.intensidad + "\n")
    });
}

const mostrarCursoDisponible = (nom) => {
    listar();
    let cur = listaCursos.find(buscar => buscar.nombre == nom)
    if (!cur) {
        console.log('El curso inscrito no esta disponible o no existe')
    } else {
        listaCursos.forEach(curso => {
            if (curso.nombre == nom && curso.estado == 'disponible') {
                console.log('Descripcion del curso: ' + curso.descripcion);
                console.log('Modalidad: ' + curso.modalidad);
                console.log('Intensidad horarioa: ' + curso.intensidad + "\n")
            } 
        });
    }
}

const mostrarinscritos = () => {
    console.log('Cargando la informacion de los cursos.......' + "\n")
    listar();
    listaCursos.forEach(curso => {
        console.log('Curso: ' + curso.nombre + ' estudiantes inscritos : ' + "\n")
        cargarInscritos(curso.nombre);
    });
}

const cargarInscritos = (nom) => {
    listari();
    listaInscritos.forEach(ins => {
        if (ins.curso == nom) {
            console.log('' + ins.nombre + "\n");
        }
    });
}

const actualizar = (id) => {
    listar()
    let encontrado = listaCursos.find(buscar => buscar.id == id)
    if(!encontrado){
        console.log('el curso no existe')
    }
    else{
        if(encontrado.estado == "disponible"){
            encontrado.estado = "cerrado";
            console.log('Se ha actualizado el estado');
            guardar();
        }
    else{
        encontrado.estado = "disponible";
        console.log('Se ha actualizado el estado');
        guardar();
    }
    }
}

const eliminarInscrito = (idx, cursox) => {
    listari();
    let nuevo = listaInscritos.filter(mat => !(mat.id == idx && mat.curso == cursox));
    if (nuevo.length == listaInscritos.length){
        console.log('No se encontró ningun registro con la información suministrada');
    }else{
        listaInscritos = nuevo;
        guardari();
        console.log('Inscripción eliminada correctamente' + '\n');
        console.log('Estudiantes inscritos en '+ cursox + '\n');
        nuevo.forEach(ins =>  {
            if (ins.curso == cursox) {
            console.log('' + ins.nombre + "\n");
            }
        });
    }
}

module.exports = {
    crear,
    crearu,
    creari,
    mostrar,
    mostraru,
    mostrarcurso,
    mostrarCursosDisponibles,
    mostrarCursoDisponible,
    mostrarinscritos,
    actualizar,
    eliminarInscrito
};