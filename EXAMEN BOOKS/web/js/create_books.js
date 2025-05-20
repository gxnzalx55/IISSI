"use strict";


import { messageRenderer } from "./renderers/messages.js";
import { booksAPI_auto } from "./api/_books.js";

const urlParams = new URLSearchParams(window.location.search);
const libroId = urlParams.get('bookId');

//comienza en null y añadiremos info si queremos actualizarlo 
let currentBook = null;

async function main() {

    //si existe el libro, cargar su info
    if (libroId !== null) {
        loadCurrentBook();
    }


    document.getElementById("formId").onsubmit = async function (event) {

        let formData = new FormData(event.target);
        event.preventDefault();

        //Si libro actual no existe, crearlo
        if (currentBook === null) {
            createNewBook(formData);
        }

        //si libro actual existe, actualizarlo
        else {
            updateRegister(formData);
        }



    }
}

//Funcion para cargar la info del libro actual
async function loadCurrentBook() {
    let title = document.getElementById("title-input");
    let author = document.getElementById("author-input");
    let releaseDate = document.getElementById("releaseDate-input");
    let numPages = document.getElementById("numPages-input");
    let imageUrl = document.getElementById("imageUrl-input");

    try {

        currentBook = await booksAPI_auto.getById(libroId);

        title.value = currentBook.title;
        author.value = currentBook.author;   
        releaseDate.value = currentBook.releaseDate;
        numPages.value = currentBook.numPages;
        imageUrl.value = currentBook.imageUrl;

    }

    catch (err) {

        messageRenderer.showErrorMessage('Error al cargar la información del libro: ' + err.response.data.message);
    }

}



//Funcion para crear nuevo libro
async function createNewBook(formData) {
    try {
        await booksAPI_auto.create(formData);

    } catch (err) {
        messageRenderer.showErrorMessage('Error al crear el libro: ' + err.response.data.message);
    }
}




//Funcion para actualizar el libro 
async function updateRegister(formData) {
    try {
        await booksAPI_auto.update(formData, libroId); //booksAPI tiene la funcion update, delete...

    } catch (err) {
        messageRenderer.showErrorMessage('Error al actualizar el libro: ' + err.response.data.message);
    }
}


document.addEventListener("DOMContentLoaded", main);