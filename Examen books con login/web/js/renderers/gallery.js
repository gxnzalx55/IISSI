"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { bookRenderer } from "./books.js";

const galleryrenderer ={
    asCardGallery: function(books){
        
        let galleryContainer= parseHTML('<div class="book-gallery row p-5 bg-light"> </div>');

for (let book of books){
   
    galleryContainer.appendChild(bookRenderer.asCard(book));
    
}

return galleryContainer;
    }
};
export{ galleryrenderer }