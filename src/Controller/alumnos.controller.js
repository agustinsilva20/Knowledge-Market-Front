import urlWebServices from './webServices.js';

export const getAlumnos = async function(){
    // URL
    let url = urlWebServices.getAlumnos;

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

export const contratar = async function(cursoid, dto){
    // URL
    let url = urlWebServices.contratarCurso + cursoid;
    // Envio la peticion
    try{
        const formData = new URLSearchParams();
        formData.append("nombre", dto.nombre);
        formData.append("telefono", dto.telefono);
        formData.append("correo", dto.correo);
        formData.append("estado", dto.estado);
        formData.append("idCurso", cursoid);

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
