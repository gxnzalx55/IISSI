"use strict";

import { booksAPI_auto } from "./api/_books.js";
import { messageRenderer } from "/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let libroBorrarId = urlParams.get("bookId");

async function main() {
    let deleteBtn = document.querySelector("#botton-delete");

      deleteBtn.onclick = handleDelete;

}

async function handleDelete(event) {
    let answer = confirm("¿Quieres eliminar el concurso?");
    if (answer) {
        try {
            await booksAPI_auto.delete(libroBorrarId);
            window.location = "/books.html";
        } catch (err) {
            messageRenderer.showErrorMessage(err);
        }
    }
}
document.addEventListener("DOMContentLoaded", main);