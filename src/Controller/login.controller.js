import urlWebServices from './webServices.js';
export const login = async function(dto){
    // URL
    let url = urlWebServices.login;

    // Armar la peticion
    const formData = new URLSearchParams();
    formData.append("correo", dto.correo);
    formData.append("password", dto.password)
    // Envio la peticion
    try{
        let response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                //"x-access-token": WebToken.webtoken
            },
            body: formData
        })

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        
        switch (rdo){
            case 200:
                {
                    //guardo token
                    localStorage.setItem("x",data.token);
                    localStorage.setItem("id", data.idCuenta.ProfesorID);
                    localStorage.setItem("correo",data.idCuenta.Correo)                   
                    return ({rdo:0,mensaje:"Ok"});//correcto
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



export const register = async function(dto){
    // URL
    let url = urlWebServices.register;

    // Armar la peticion
    const formData = new URLSearchParams();
    formData.append("nombre", dto.nombre);
    formData.append("correo", dto.correo)
    formData.append("telefono", dto.telefono)
    formData.append("password", dto.password)
    formData.append("password2", dto.password2)

    // Envio la peticion
    try{
        let response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                //"x-access-token": WebToken.webtoken
            },
            body: formData
        })

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        
        switch (rdo){
            case 200:
                {
                    //guardo token
                    localStorage.setItem("x",data.token);
                    localStorage.setItem("id", data.idCuenta);                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
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

export const recuperar = async function(mail){
    // URL
    let url = urlWebServices.recuperar;
    const formData = new URLSearchParams();
    formData.append("correo", mail);
    try{
        let response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                //"x-access-token": WebToken.webtoken
            },
            body: formData
        })

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        
        switch (rdo){
            case 200:
                {               
                    return ({rdo:0,mensaje:"Ok"});//correcto
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
        return ({rdo:1,message:"Error inesperado"});    

    };


}

export const recuperarDos = async function(dto){
    let url = urlWebServices.recuperarDos;
    const formData = new URLSearchParams();
    formData.append("correo", dto.correo);
    console.log("correo enviado a recuperarDos",dto.correo);
    formData.append("codigo", dto.codigo);
    formData.append("password", dto.password);
    try{
        let response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://localhost:3000",
                //"x-access-token": WebToken.webtoken
            },
            body: formData
        })

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        
        switch (rdo){
            case 200:
                {               
                    return ({rdo:0,mensaje:"Ok"});//correcto
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
        return ({rdo:1,message:"Error inesperado"});    

    };
}