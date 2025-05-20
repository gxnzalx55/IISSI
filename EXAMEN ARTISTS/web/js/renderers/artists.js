"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const artistsRenderer = { //CAMBIAR

    // name, bio, startDate, imageUrl, numAlbums

    //PARA TAMAÑO CARTAS SI HAY ALGÚN PROBLEMA CAMBIAR style aqui
    //Y PARA APARIENCIA -> name, bio, foto y botón

    //CAMBIAR ---->
    asCard: function(artist) {
        let html = `<div class="card mb-3 shadow-sm" style="width: 400px;height: 500px">
            <a href="artists_details.html?artistId=${artist.artistId}" class="text-muted">
                        <img src=${artist.imageUrl} class="img-fluid card-image embed-responsive-item" style="width: 340px;height: 250px">
                        </a>
                        
                        <div class="card-body">
                            <h5 class="card-title text-center">${artist.name}</h5>
                            <p class="card-text">${artist.bio}</p>
                        </div>
                    </div>`;
        let card = parseHTML(html);
        return card;
    },

    asCardGallery: function(artists) { //CAMBIAR
        let gallery = parseHTML(`<div class="row text-center"></div>`);

        for (let artist of artists) { //CAMBIAR
            let col = parseHTML(`<div class="col-md-4"></div>`);
            let card = this.asCard(artist); //CAMBIAR

            col.append(card);
            gallery.append(col);
        }

        return gallery;
    },

    asDetails: function(artist) { //CAMBIAR -->
        let html = `<div class="row">
        <div class="col-md-6" id="photo_detail">
        <img src="${artist.imageUrl}" class="img-fluid">
        </div>
        <div class="col-md">
        <h3 id="name">${artist.name}</h3>
        <h6>${artist.bio}</h6>
        <button class="btn btn-primary" id="test-button">Eliminar</button>
        </div>
        </div>`;
        let photoDetails = parseHTML(html);
        return photoDetails;
    },

};

export { artistsRenderer }; //CAMBIAR