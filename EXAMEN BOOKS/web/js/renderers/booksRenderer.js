"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const bookRenderer = {
    asCard: function (book) {
        let html = `<div class="col-sm-4 card mb-1 p-3 ">
        <div class="">
            <a>
                <img src="${book.imageUrl}" class="img-fluid w-100">
            </a>
        </div>	
        <div class="card-body text-center m-0 p-3">
            <h5 class="card-title m-0">#${book.bookId} ${book.title}</h5>
            <p class="card-text m-0 ">${book.author}</p>

           
            <!-- BOTONES -->
            <br>
            <a href="create_books.html? bookId=${book.bookId}"> <button  class="btn btn-primary col mx-auto">Editar</button></a>
            <button class="btn btn-danger mt-2" id="botton-delete">Eliminar</button>


        </div>
    </div>`;
        return parseHTML(html);

    }
}
export { bookRenderer };
