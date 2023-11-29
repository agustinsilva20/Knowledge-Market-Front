const urlApi = "http://localhost:8080/api/";

const urlWebServices = {
    login : urlApi + "login",
    register : urlApi + "crearcuenta",

    crearAnuncio: urlApi + "crearanuncio",
    eliminarAnuncio: urlApi + "eliminaranuncio",
    despublicarAnuncio: urlApi + "despublicaranuncio",
    republicarAnuncio: urlApi + "republicaranuncio",
    updateAnuncio: urlApi + "updateanuncio",
    getAnuncios: urlApi + "getanuncios",
    getAnuncioInfo: urlApi + "getanuncioinfo/",
    getAnuncioByProfesor: urlApi + "getanuncioByProfesor/",

    getCalificaciones: urlApi + "getcalificaciones/",
    createCalificacion: urlApi + "createcalificacion/",
    aceptarCalificacion : urlApi + "aceptarcalificacion/",
    rechazarCalificacion : urlApi + "rechazarcalificacion/",

    contratarCurso : urlApi + "contratarcurso/",
    aceptarAlumno : urlApi + "aceptaralumno/",
    rechazarAlumno: urlApi + "rechazaralumno/",
    finalizarAlumno : urlApi + "finalizaralumno/",
    alumnosPendientes : urlApi + "alumnospendientes",
    getAlumnos : urlApi + "getalumnos"

}

export default urlWebServices