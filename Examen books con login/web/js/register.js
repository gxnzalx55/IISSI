"use strict";
import { messageRenderer } from "/js/renderers/messages.js"; // 5b. Renderizador de mensajes

import { authAPI_auto } from './api/_auth.js';
import { sessionManager } from './utils/session.js';

document.addEventListener ("DOMContentLoaded", async function() { // Al cargar el documento
    document.getElementById("register-form").onsubmit = function(event) { // manejador del Submit
	
        let formData = new FormData (event.target); // Se transforma en formData (Array JSON), por comodidad
		event.preventDefault(); // Inhibir el submit
       
        // Si hay errores, se presentan los mensajes
        if ( errors.length > 0) {
            document.getElementById ("errors").innerHTML=""; // Se tiene que añadir a register.html
            messageRenderer.showErrorAsAlert("<small>"+errors.join("; &emsp; ")+"</small>");
        } else  {     
            sendRegister(formData); // 6. Se envía el formulario al servidor.
        }
    };
})

async function sendRegister(formData) { // 6. Registro del nuevo usuario
    try {   let loginData = await authAPI_auto.register(formData);
            let sessionToken = loginData.sessionToken;
            let loggedUser = loginData.user;
            sessionManager.login(sessionToken, loggedUser);
            window.location.href = "index.html"; // Al inicio para mostrar usuario conectado
    } catch (error) {
        messageRenderer.showErrorAsAlert ("Error while signing Up: "+ error.response.data.message );
    }
}
