import urlWebServices from './webServices.js';

export const getCalificaciones = async function(){
    // URL
    let url = urlWebServices.getCalificaciones ;
    // Envio la peticion
    try{
        let response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                "x-access-token": localStorage.getItem('x')
            }
        })
        let rdo = response.status;
        let data = await response.json();
   
        switch (rdo){
            case 200:
                {
                    console.log(data.message)             
                    return ({rdo:0,message:data.message});//correcto
                }
            default:
                    {
                        //otro error
                        return ({rdo:1,message:data.message});                
                    }
        }
    }
    catch(error)
    {
        console.log("error",error);
    };

}

export const calificar = async function(idCurso, dto){
    // URL
    let url = urlWebServices.createCalificacion + idCurso ;

    // Envio la peticion
    try{
        const formData = new URLSearchParams();
        formData.append("nombre", dto.nombre);
        formData.append("calificacion", dto.calificacion);
        formData.append("comentario", dto.comentario);
        formData.append("cursoID", dto.cursoID);

        let response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                "x-access-token": localStorage.getItem('x')
            },
            body: formData
        })
        let rdo = response.status;
        let data = await response.json();
   
        switch (rdo){
            case 200:
                {
                    console.log(data.message)             
                    return ({rdo:0,message:data.message});//correcto
                }
            default:
                    {
                        //otro error
                        return ({rdo:1,message:data.message});                
                    }
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}


export const estadoComentario = async function(idComentario, estado){
    //URLS
    let url_aceptar = urlWebServices.aceptarCalificacion + idComentario ;
    let url_rechazar = urlWebServices.rechazarCalificacion + idComentario ;

    let url = ""
    if (estado === "ACEPTAR") {
        url = url_aceptar
    }
    else{
        url = url_rechazar
    }
// Envio la peticion
try{
    let response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "http://localhost:3000",
            "x-access-token": localStorage.getItem('x')
        }

    })
    let rdo = response.status;
    let data = await response.json();

    switch (rdo){
        case 200:
            {
                console.log(data.message)             
                return ({rdo:0,message:data.message});//correcto
            }
        default:
                {
                    //otro error
                    return ({rdo:1,message:data.message});                
                }
    }
}
catch(error)
{
    console.log("error",error);
};
}