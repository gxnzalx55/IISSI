"use strict";

import { artistsRenderer } from "/js/renderers/artists.js"; //CAMBIAR <-
import { artistsAPI_auto } from "/js/api/_artists.js"; //CAMBIAR Y COMPROBAR <-
import { messageRenderer } from "/js/renderers/messages.js";

// Obtiene el ID del artista para poder cargar su foto desde su URL
let urlParams = new URLSearchParams(window.location.search);
let artistId = urlParams.get("artistId"); //CAMBIAR <-


async function main() {
    // Comprueba que tenemos su ID antes de hacer cualquier otra cosa
    if (artistId === null) { //CAMBIAR
        messageRenderer.showErrorAsAlert("Please, provide an artistId"); //CAMBIAR
        return;
    }
    await loadArtistDetails(); //CAMBIAR
    let button = document.getElementById("test-button");
    console.log(button);
    button.onclick = clickHandler;
}

//Apariencia details
async function loadArtistDetails() { //CAMBIAR
    let artistname = document.getElementById("artistName"); //CAMBIAR <-
    let artistContainer = document.getElementById("artist"); //CAMBIAR <-
    try {
        let artist = await artistsAPI_auto.getById(artistId); //CAMBIAR <-
        let artistDetails = artistsRenderer.asDetails(artist); //CAMBIAR <-
        artistContainer.appendChild(artistDetails); //CAMBIAR <-
        console.log(artistContainer); //CAMBIAR
        //artistname.innerHTML(artist.name);
    } catch (err) {
        messageRenderer.showErrorMessage("Error loading artist", err); //CAMBIAR
    }
}

//BOTÓN PARA BORRAR ARTISTA

async function clickHandler(event) {
    let answer = confirm("Do you really want to delete this artist?"); //CAMBIAR
    if (answer) {
        try {
            await artistsAPI_auto.delete(artistId); //CAMBIAR <-
            window.location = "/artists.html"; //CAMBIAR
        } catch (err) {
            messageRenderer.showErrorMessage(err.response.data.message);
        }
    }
}


document.addEventListener("DOMContentLoaded", main);