import urlWebServices from './webServices.js';

export const getMisCursos = async function(){
    let url = urlWebServices.getAnuncioByProfesor;
    console.log(url)
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
        console.log("Data",data)
   
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


export const EliminarAnuncio = async function(cursoID){
    // URL
    let url = urlWebServices.eliminarAnuncio;
    // Armar la peticion
    const formData = new URLSearchParams();
    formData.append("cursoID", cursoID);

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


