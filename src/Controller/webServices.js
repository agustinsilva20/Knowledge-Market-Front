const urlApi = "http://localhost:8080/api/";

const urlWebServices = {
    login : urlApi + "login", // Done 
    register : urlApi + "crearcuenta", // Done
    recuperar:urlApi + "recuperar",
    recuperarDos:urlApi + "recuperarDos",

    crearAnuncio: urlApi + "crearanuncio", //Done
    eliminarAnuncio: urlApi + "eliminaranuncio", // Done
    despublicarAnuncio: urlApi + "despublicaranuncio", // Done
    republicarAnuncio: urlApi + "republicaranuncio", // Done
    updateAnuncio: urlApi + "updateanuncio", // Done
    getAnuncios: urlApi + "getanuncios", // Done
    getAnuncioInfo: urlApi + "getanuncioinfo/",
    getAnuncioByProfesor: urlApi + "getanunciosByProfesor", // Done

    getCalificaciones: urlApi + "getcalificaciones", // Done
    createCalificacion: urlApi + "createcalificacion/", // Done
    aceptarCalificacion : urlApi + "aceptarcalificacion/", // Done
    rechazarCalificacion : urlApi + "rechazarcalificacion/", // Done

    contratarCurso : urlApi + "contratarcurso/", // Done
    aceptarAlumno : urlApi + "aceptaralumno/", // Done
    rechazarAlumno: urlApi + "rechazaralumno/", // Done
    finalizarAlumno : urlApi + "finalizaralumno/", // Done
    alumnosPendientes : urlApi + "alumnospendientes", // No va
    getAlumnos : urlApi + "getalumnos" // Done

}

export default urlWebServices