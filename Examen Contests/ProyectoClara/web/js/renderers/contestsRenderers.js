"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";


const contestsRenderer = {
    asCard: function (contest) {
        let html = `<div class="card flex-row">
       
          
                <img class="card-img w-25 p-2" src="${contest.imageUrl}" >
           
       
        <div class="card-body col">
            <p><h5 >#${contest.contestId} ${contest.name}</h5></p>
            <p >${contest.organizer}</p>
                </div>
    </div>`;
        return parseHTML(html);

    }
}
export { contestsRenderer };
