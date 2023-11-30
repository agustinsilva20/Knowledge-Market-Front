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

    getCalificaciones: urlApi + "getcalificaciones", // Desarrollo
    createCalificacion: urlApi + "createcalificacion/", // Desarrollo
    aceptarCalificacion : urlApi + "aceptarcalificacion/",
    rechazarCalificacion : urlApi + "rechazarcalificacion/",

    contratarCurso : urlApi + "contratarcurso/", // Done
    aceptarAlumno : urlApi + "aceptaralumno/", // Done
    rechazarAlumno: urlApi + "rechazaralumno/", // Done
    finalizarAlumno : urlApi + "finalizaralumno/", // Done
    alumnosPendientes : urlApi + "alumnospendientes", // No va
    getAlumnos : urlApi + "getalumnos" // Done

}

export default urlWebServices