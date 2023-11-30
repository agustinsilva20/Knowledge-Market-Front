const urlApi = "http://localhost:8080/api/";

const urlWebServices = {
    login : urlApi + "login", // Done 
    register : urlApi + "crearcuenta", // Done

    crearAnuncio: urlApi + "crearanuncio", //Done
    eliminarAnuncio: urlApi + "eliminaranuncio", // Done
    despublicarAnuncio: urlApi + "despublicaranuncio", // Done
    republicarAnuncio: urlApi + "republicaranuncio", // Done
    updateAnuncio: urlApi + "updateanuncio", // Done
    getAnuncios: urlApi + "getanuncios", // Done
    getAnuncioInfo: urlApi + "getanuncioinfo/",
    getAnuncioByProfesor: urlApi + "getanunciosByProfesor", // Done

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