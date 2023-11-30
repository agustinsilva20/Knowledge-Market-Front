import urlWebServices from './webServices.js';

export const listarAnuncios = async function(dto){
    // URL
    let url = urlWebServices.getAnuncios;

    // Envio la peticion
    try{
        let response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                //"x-access-token": WebToken.webtoken
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
            case 400:
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


export const crearAnuncio = async function(dto){
    // URL
    let url = urlWebServices.crearAnuncio;

    // Armar la peticion
    const formData = new URLSearchParams();
    formData.append("categoria", dto.categoria);
    formData.append("frecuencia", dto.frecuencia)
    formData.append("veces", dto.veces)
    formData.append("modalidad", dto.modalidad)
    formData.append("descripcion", dto.descripcion)
    formData.append("precio", dto.precio)


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
            case 400:
                    {
                        //otro error
                        return ({rdo:1,message:data.message});                
                    }
            case 500:
                        {
                            //otro error
                            return ({rdo:1,message:data.message});                
                        }
            default:
                return ({rdo:1,message:"error"})
        }
    }
    catch(error)
    {
        console.log("error",error);
        return ({rdo:1,message:"error"});//correcto
    };

}

