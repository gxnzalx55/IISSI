"use strict";


import {messageRenderer} from "./renderers/messages.js";
import { booksAPI_auto } from "./api/_books.js";

const urlParams= new URLSearchParams(window.location.search);
const libroId= urlParams.get('bookId');

let currentBook = null;

async function main() {
    
    if(libroId!==null){
           
            loadCurrentBook();
    }

    
    

    document.getElementById("formId").onsubmit= async function (event){
       
        let formData = new FormData(event.target);
        event.preventDefault();
       

        if(currentBook===null){
         
                sendRegister(formData);
            
        }

        else{
alert(console.log(libroId));

            updateRegister(formData);
        }

                
             
    }}


async function sendRegister(formData){
    try {
       
        await booksAPI_auto.create(formData);

    } catch (err) {
        messageRenderer.showErrorMessage('Error al crear el libro: ' + err.response.data.message);
    }
}


async function loadCurrentBook(){
        

        
        let title = document.getElementById("title-input");
        let autor =document.getElementById("author-input");
        let releaseDate = document.getElementById("releaseDate-input");
        let numPages = document.getElementById("numPages-input");
        let imageUrl = document.getElementById("imageUrl-input");
            
        try{
            
            currentBook=await booksAPI_auto.getById(libroId);
            
            title.value=currentBook.title;
            autor.value=currentBook.author;
            releaseDate.value=currentBook.releaseDate;
            numPages.value=currentBook.numPages;
            imageUrl.value=currentBook.imageUrl;

        }

        catch(err){
            
            messageRenderer.showErrorMessage('Error al loadCurrentBook el libro: ' + err.response.data.message);
        }

}


async function updateRegister(formData){
    try {
       
        await booksAPI_auto.update(formData,libroId);

    } catch (err) {
        messageRenderer.showErrorMessage('Error al actualizar el libro: ' + err.response.data.message);
    }
}


document.addEventListener("DOMContentLoaded", main);