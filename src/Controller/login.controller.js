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