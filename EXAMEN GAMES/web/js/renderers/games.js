"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const gamesRenderer = { //CAMBIAR
    asCard: function(game) { //CAMBIAR -->
        let html = `<div class="card mb-3 shadow-sm">
                    <a href="create_game.html?gameId=${game.gameId}" class="text-muted">
                        <img src="${game.imageUrl}" class="img-fluid card-image embed-responsive-item">
                        
                        <div class="card-body">
                            <h5 class="card-title text-center">${game.title}</h5>
                            <p class="card-text">${game.developer}</p>
                        </div>
                    </div>`;
        let card = parseHTML(html);
        return card;
    },

    asCardGallery: function(games) { //CAMBIAR
        let gallery = parseHTML(`<div class="row text-center"></div>`);

        for (let game of games) { //CAMBIAR <-
            let col = parseHTML(`<div class="col-md-4"></div>`);
            let card = this.asCard(game); //CAMBIAR

            col.append(card);
            gallery.append(col);
        }

        return gallery;
    }
};

export { gamesRenderer }; //CAMBIAR