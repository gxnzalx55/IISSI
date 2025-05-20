"use strict";

import { galleryrenderer } from "./renderers/gallery.js";
import {messageRenderer} from "./renderers/messages.js";
import {booksAPI_auto} from "./api/_books.js";



async function main() {
    
    try {
        let galleryBooks = await booksAPI_auto.getAll(); 
        let divGallery = document.getElementById("divGallery");
         //este "divGallery"es el de book.html
        
        divGallery.appendChild(galleryrenderer.asCardGallery(galleryBooks));
    }

   catch(err){
        messageRenderer.showErrorMessage("Error", err.response.data.message);
  }
}

document.addEventListener("DOMContentLoaded", main);