"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { videoRenderer } from "./videos_renderer.js";

const galleryrenderer ={
    asCardGallery: function(videos){
        
        let galleryContainer= parseHTML('<div class="book-gallery row p-5 bg-light"> </div>');

for (let video of videos){
   
    galleryContainer.appendChild(videoRenderer.asCard(video));
    
}


return galleryContainer;
    }
};
export{ galleryrenderer }