"use strict";

import { contestsAPI_auto } from "/js/api/_contests.js"; //COMPROBAR Y CAMBIAR <-
import { contestsRenderer } from "/js/renderers/contest.js"; //COMPROBAR Y CAMBIAR <-

// DOM elements that we will use
const contestDiv = document.getElementById("contestRows"); //CAMBIAR <-

// Main function that will run when the page is ready
async function main() {
    let contests = await contestsAPI_auto.getAll(); //CAMBIAR <-
    let contestRows = contestsRenderer.asTable(contests); //CAMBIAR <-
    contestDiv.append(contestRows); //CAMBIAR <-
}

document.addEventListener("DOMContentLoaded", main);