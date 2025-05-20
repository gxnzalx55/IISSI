"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import{contestsRenderer} from "./contestsRenderers.js";

const galleryrenderer = {
    asCardGallery: function (contests) {
        let galleryContainer = parseHTML('<div class="contest-gallery row p-5 bg-light"> </div>');
        for (let contest of contests) {
            galleryContainer.appendChild(contestsRenderer.asCard(contest));
        }
        return galleryContainer;
    }
};
export { galleryrenderer }