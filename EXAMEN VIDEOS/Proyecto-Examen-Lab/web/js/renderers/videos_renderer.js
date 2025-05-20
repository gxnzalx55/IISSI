"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const videoRenderer={
    asCard : function(d){
        let html=`<li class="list-group-item list-group-item">
        <div class="media">
            <div class="media-body">
                <h5 class="mt-0">${d.title}</h5><img src="${d.thumbnailUrl}" class="ml-3 img-fluid" style="width: 100px; height: auto;">
                <p class="mt-0"> Autor: ${d.description} </p>
                <p class="mt-0"> Fecha de subida: ${d.uploadDate} </p>
                <p class="mt-0"> Duración en segundos: ${d.durationSeconds} </p>
                <p class="mt-0"> Edad del usuario: ${d.age} </p>
                <p class="card-text text-end fst-italic">
                <small>User @${d.userId} ${d.fullName} <small>
                <img src="${d.avatarUrl}" class="photo-avatarUrl">
               
                
            </p>
           
    </li>`;
        return parseHTML(html);
        
    }
}
export { videoRenderer };

