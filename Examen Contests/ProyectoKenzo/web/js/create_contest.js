"use strict";
import { contestsAPI_auto } from "/js/api/_contests.js"; //CAMBIAR <-
import { messageRenderer } from "/js/renderers/messages.js";
import { contestValidator } from "/js/validators/contest.js";


let urlParams = new URLSearchParams(window.location.search);
let contestId = urlParams.get("contestId"); //CAMBIAR <-
let currentContest = null; //CAMBIAR


const errorsDiv = document.getElementById("errors");
async function main() {
    if (contestId !== null) { //CAMBIAR
        loadCurrentContest(); //CAMBIAR
    }
    let contestForm = document.getElementById("contest-form"); //CAMBIAR <-
    contestForm.onsubmit = handleContestForm; //CAMBIAR <-
}
async function handleContestForm(event) { //CAMBIAR
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let errors = contestValidator.validateContest(formData);
    
    if (errors.length > 0) {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";
        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }
    }

    if (currentContest === null) { //CAMBIAR
        try {
            await contestsAPI_auto.create(formData); //CAMBIAR
            window.location.href = "contests.html"; //CAMBIAR
        } catch (err) {
            messageRenderer.showMessageAsAlert("Error", err);
        }

    } else {
        try {
            let resp = await contestsAPI_auto.update(formData, contestId); //CAMBIAR <-
            window.location.href = `contests.html`; //CAMBIAR
        } catch (err) {
            messageRenderer.showMessageAsAlert(err);
        }
    }

}
async function loadCurrentContest() { //CAMBIAR                 
    let name = document.getElementById("name-input");
    let organizer = document.getElementById("organizer-input");
    let date = document.getElementById("contestDate-input");
    let image = document.getElementById("url-input");
    let prize = document.getElementById("prize-input");
    let description = document.getElementById("description-input");

    try {
        currentContest = await contestsAPI_auto.getById(contestId); //CAMBIAR <-
        name.value = currentContest.name; //CAMBIAR
        organizer.value = currentContest.organizer; //CAMBIAR
        date.value = currentContest.contestDate; //CAMBIAR
        image.value = currentContest.imageUrl; //CAMBIAR
        prize.value = currentContest.prize; //CAMBIAR
        description.value = currentContest.description;
    } catch (err) {
        messageRenderer.showMessageAsAlert(err);
    }
}
document.addEventListener("DOMContentLoaded", main);