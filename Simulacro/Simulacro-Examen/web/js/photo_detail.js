"use strict ";
import { photoRenderer } from "/js/renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js ";
import { messageRenderer } from "/js/renderers/messages.js ";
import { sessionManager } from "/js/utils/session.js";
import { v_votesAPI_auto } from "./api/_v_votes.js";
import { votesAPI_auto } from "./api/_votes.js";

// Captura el parámetro photoId de la URL que figura en el link de cada foto
const urlParams = new URLSearchParams(window.location.search); // Objeto query de la ventana
const photoId = urlParams.get('photoId'); // Extrae el parámetro
const divButtons = document.querySelector("#divButtons");
let userId = sessionManager.getLoggedUser().userId;
let voteId = null; // Voto

async function main () {
	if ( photoId === null ) {// Check that we have an ID before doing anything else
		messageRenderer.showErrorAsAlert ("Please , provide a photoId ");
		return;
	}

	if (!sessionManager.isLogged()) {
		hideEditVoteButtons();
	} else {
		userId = sessionManager.getLoggedUser().userId;
		let votes = await votesAPI_auto.getAll();
		for (let vote of votes) {
			if (vote.userId == userId){
				voteId = vote.voteId;
				break;
			}
		}
	}

	await loadPhotoDetails (); // Carga la foto en el formulario
	await loadPhotoVote();

	let addButton = document.getElementById("btnAddRate");
	let updButton = document.getElementById("btnUpdRate");
	let delButton = document.getElementById("btnDelRate");

	if(voteId !== null) {
		let vote = await votesAPI_auto.getById(voteId);
		document.getElementById("rating-input").value = vote.value;
		addButton.hidden = true;
	} else {
		updButton.hidden = true;
		delButton.hidden = true;
	}

	addButton.onclick = handleAdd;
	updButton.onclick = handleUpd;
	delButton.onclick = handleDel;
}

async function handleAdd( event ){
	let formRef = document.getElementById("formVote");
	let formData = new FormData(formRef);
	event.preventDefault();

	if(formData.value < 0 || formData.value > 5) {
		messageRenderer.showErrorMessage("La valoración debe estar entre 0 y 5");
	} else {
		formData.append("userId", sessionManager.getLoggedUser().userId);
		formData.append("photoId", photoId);

		let result = await votesAPI_auto.create(formData);
		console.log(result);
		window.location.reload();
	}
}

async function handleUpd( event ){
	let formRef = document.getElementById("formVote");
	let formData = new FormData(formRef);
	event.preventDefault();

	if(formData.value < 0 || formData.value > 5) {
		messageRenderer.showErrorMessage("La valoración debe estar entre 0 y 5");
	} else {
		formData.append("userId", sessionManager.getLoggedUser().userId);
		formData.append("photoId", photoId);
		let result = await votesAPI_auto.update(formData, voteId);
    	console.log(result);
		window.location.reload();
	}
}

async function handleDel(){
	let answer = confirm("¿Estás seguro de querer eliminar tu voto?");
    if (answer) {
        try {
            await votesAPI_auto.delete(voteId);
			window.location.reload();
        } catch (error) {
            messageRenderer.showErrorMessage(error.response.data.message);
        }
    }
}

function hideEditVoteButtons() {
	let hideRefs = document.getElementsByClassName("to-hide-if-guest");
	for (let hideRef of hideRefs) {
		hideRef.hidden = true;
	}
}

async function loadPhotoDetails () {
	try {
		let photoDetails = document.querySelector("#photo-details");
		let photo = await photosAPI_auto.getById ( photoId ); // Llamada Ajax asíncrona. Se espera, haciéndola síncrona
		// let photo = await photoswithusersAPI_auto.getByPhotoId ( photoId );
		photoDetails.appendChild (photoRenderer.asDetails ( photo )); // Añade la renderización asDetail
	} catch ( err) {
		messageRenderer.showErrorAsAlert (" Error loading photo "+ err.response.data.message );
	}
}

async function loadPhotoVote () {
	try {
		let publicVoteDiv = document.getElementById("public-vote");
		let votes = await v_votesAPI_auto.getAll();
		for (let vote of votes) {
			if (vote.photoId == photoId) {
				publicVoteDiv.appendChild(document.createTextNode(`${vote.avgValue}`));
				break;	
			}
		}
	} catch ( error ) {
		messageRenderer.showErrorAsAlert(" Error loading public vote value " + error.response.data.message);
	}
}


document.addEventListener ("DOMContentLoaded", main ); // Manejador de eventos. Cuando se carga totalmente