"use strict";

import { artistsAPI_auto } from "/js/api/_artists.js"; //CAMBIAR Y COMPROBAR SI COINCIDE (_) <-
import { artistsRenderer } from "/js/renderers/artists.js"; //CAMBIAR <-

// DOM elements that we will use
const artistsDiv = document.getElementById("artistsCards"); //CAMBIAR <-

// Main function that will run when the page is ready
async function main() {
    let artists = await artistsAPI_auto.getAll(); //CAMBIAR <-
    let artistsCards = artistsRenderer.asCardGallery(artists); //CAMBIAR <-
    console.log(artistsCards); //CAMBIAR <-
    artistsDiv.append(artistsCards); //CAMBIAR <-
}

document.addEventListener("DOMContentLoaded", main);