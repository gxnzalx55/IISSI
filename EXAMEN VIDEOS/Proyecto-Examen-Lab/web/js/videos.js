"use strict";

import { galleryrenderer } from "./renderers/gallery_renderer.js";
import {messageRenderer} from "./renderers/messages.js";

import{videoswithusersAPI_auto} from "/js/api/_videoswithusers.js";



async function main() {
    
    try {
        let galleryVideosUsers = await videoswithusersAPI_auto.getAll(); 
        let divGallery = document.getElementById("divGallery");
         
        
        divGallery.appendChild(galleryrenderer.asCardGallery(galleryVideosUsers));
    }

   catch(err){
        messageRenderer.showErrorMessage("Error", err.response.data.message);
  }
}

document.addEventListener("DOMContentLoaded", main);