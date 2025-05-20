"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const contestsRenderer = { //CAMBIAR
    asRow: function (contest) { //CAMBIAR -->
        let html = `<tr>
                        <th scope="row">${contest.contestId}</th>
                        <td>${contest.imageUrl}</td>
                        <td>${contest.name}</td>
                        <td>${contest.organizer}</td>
                        <td>${contest.description}</td>
                        <td>${contest.prize}</td>
                        <td>${contest.contestDate}</td>
                    </tr>`;
        let row = parseHTML(html);
        return row;
    },

    asTable: function (contests) { //CAMBIAR
        let gallery = parseHTML( `<table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Organizer</th>
                <th scope="col">Description</th>
                <th scope="col">Prize</th>
                <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody></tbody>
        </table>`);

        for (let contest of contests) { //CAMBIAR <-
            let row = this.asRow(contest); //CAMBIAR
            gallery.append(row);
        }

        return gallery;
    }
};

export { contestsRenderer }; //CAMBIAR