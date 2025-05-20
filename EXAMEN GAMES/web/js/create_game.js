"use strict";
import { gamesAPI_auto } from "/js/api/_games.js"; //CAMBIAR <-
import { messageRenderer } from "/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let gameId = urlParams.get("gameId"); //CAMBIAR <-
let currentGame = null; //CAMBIAR


const errorsDiv = document.getElementById("errors");
async function main() {
    if (gameId !== null) { //CAMBIAR
        loadCurrentGame(); //CAMBIAR
    }
    let gamesForm = document.getElementById("game-form"); //CAMBIAR <-
    gamesForm.onsubmit = handleGamesForm; //CAMBIAR <-
}
async function handleGamesForm(event) { //CAMBIAR
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    if (currentGame === null) { //CAMBIAR
        try {
            await gamesAPI_auto.create(formData); //CAMBIAR
            window.location.href = "games.html"; //CAMBIAR
        } catch (err) {
            messageRenderer.showErrorAsAlert("Error", err);
        }
    } else {
        try {
            let resp = await gamesAPI_auto.update(formData, gameId); //CAMBIAR <-
            window.location.href = `games.html`; //CAMBIAR
        } catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }

    }

}
async function loadCurrentGame() { //CAMBIAR
    let title = document.getElementById("title-input");
    let dev = document.getElementById("developer-input");
    let year = document.getElementById("year-input");
    let image = document.getElementById("url-input");
    let score = document.getElementById("score-input");
    try {
        currentGame = await gamesAPI_auto.getById(gameId); //CAMBIAR <-
        title.value = currentGame.title; //CAMBIAR
        dev.value = currentGame.developer; //CAMBIAR
        year.value = currentGame.releaseYear; //CAMBIAR
        image.value = currentGame.imageUrl; //CAMBIAR
        score.value = currentGame.reviewScore; //CAMBIAR
    } catch (err) {
        messageRenderer.showErrorAsAlert(err.response.data.message);
    }
}
document.addEventListener("DOMContentLoaded", main);