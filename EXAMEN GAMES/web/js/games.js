"use strict";

import { gamesAPI_auto } from "/js/api/_games.js"; //COMPROBAR Y CAMBIAR <-
import { gamesRenderer } from "/js/renderers/games.js"; //COMPROBAR Y CAMBIAR <-

// DOM elements that we will use
const gamesDiv = document.getElementById("gamesCards"); //CAMBIAR <-

// Main function that will run when the page is ready
async function main() {
    let games = await gamesAPI_auto.getAll(); //CAMBIAR <-
    let gamesCards = gamesRenderer.asCardGallery(games); //CAMBIAR <-
    gamesDiv.append(gamesCards); //CAMBIAR <-
}

document.addEventListener("DOMContentLoaded", main);