"use strict";

import { galleryrenderer } from "./renderers/gallery.js";
import {messageRenderer} from "./renderers/messages.js";
import {contestsAPI_auto} from "./api/_contests.js";

async function main() {
    
    try {
        let galleryContest = await contestsAPI_auto.getAll(); 
        let divGallery = document.getElementById("divGallery");
        divGallery.appendChild(galleryrenderer.asCardGallery(galleryContest));
    }

   catch(err){
    messageRenderer.showErrorMessage('Error al crear el libro: ' + err.response.data.message);
  }
}

document.addEventListener("DOMContentLoaded", main);