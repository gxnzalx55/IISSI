/*
	C.Arévalo
	index.js.  Control de index.html
	Marzo/2024
*/
"use strict";						// Nivel elevado de control de errores
import { galleryRenderer } from '/js/renderers/gallery.js';// Renderizador de la galería
import { photosAPI_auto } from '/js/api/_photos.js';
import { messageRenderer } from '/js/renderers/messages.js';;
import { sessionManager } from "/js/utils/session.js";
const visibilityTitle = document.getElementById("visibilityTitle");
async function main () {//Punto de entrada principal, haciéndolo asíncrono para poder llamar AJAX
	try { // Acceso con éxito a las fotos
		let photos = await photosAPI_auto.getAll(); // Recuperar array con todas las fotos. Llamada bloqueante
		/* Renderizador de fotos */
		let container = document.querySelector ("#divGallery");
		container.appendChild (galleryRenderer.asCardGallery (photos));
	}
	catch(err) { // Dar mensaje de error
		messageRenderer.showErrorAsAlert(err);
	}
}
document.addEventListener ("DOMContentLoaded", main );