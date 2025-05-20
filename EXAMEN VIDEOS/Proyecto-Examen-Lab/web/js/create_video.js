"use strict";

import { sessionManager } from "/js/utils/session.js";
import{videosAPI_auto} from "/js/api/_videos.js";
import { messageRenderer } from "./renderers/messages.js";


async function main() {
   
    loadCurrentUser();
    loadCurrentDate();

    document.getElementById("formId").onsubmit = async function (event) {
            

        
        let formData = new FormData(event.target);
        
        event.preventDefault();
        
        sendRegister(formData);

    }
}


async function sendRegister(formData) {
    try {
        await videosAPI_auto.create(formData);

    } catch (err) {
        messageRenderer.showErrorMessage('Error al crear el libro: ' + err.response.data.message);
    }
}


async function loadCurrentUser() {
    let userId = document.getElementById('id-input');
    
    try {
        let loggedUser = sessionManager.getLoggedUser();
        userId.value =  loggedUser.userId;
    }

    catch (err) {
        messageRenderer.showErrorMessage('Error al cargar el userId: ' + err.response.data.message);
    }

}


async function loadCurrentDate() {
    let dateInput = document.getElementById('releaseDate-input'); // Obtiene el elemento de entrada para la fecha

    let today = new Date(); // Crea un nuevo objeto de fecha con la fecha y hora actuales
    let year = today.getFullYear(); // Obtiene el año actual (e.g., 2023)
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Obtiene el mes actual (de 0 a 11) y le suma 1. Luego lo convierte a una cadena y agrega un cero inicial si es necesario (e.g., '09')
    let day = String(today.getDate()).padStart(2, '0'); // Obtiene el día del mes (de 1 a 31). Luego lo convierte a una cadena y agrega un cero inicial si es necesario (e.g., '05')

    let currentDate = `${year}-${month}-${day}`; // Formatea la fecha en el formato YYYY-MM-DD, requerido por el campo de entrada de tipo date
    dateInput.value = currentDate; // Establece el valor del campo de entrada de fecha con la fecha actual
}












document.addEventListener("DOMContentLoaded", main);