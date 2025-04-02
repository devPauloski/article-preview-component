"use strict";

const shareButton = document.querySelector(".share-button");
const footer = document.querySelector("footer");
const shareLinksWrapper = document.querySelector(".share-links-wrapper");
const metaData = document.querySelector(".meta-data");

shareButton.addEventListener("click", function() {
  if (shareLinksWrapper.classList.contains("show")) {
    shareLinksWrapper.classList.remove("show");
    metaData.classList.remove("hide");
    footer.classList.remove("bg-color");
  } else {
    shareLinksWrapper.classList.add("show");
    metaData.classList.add("hide");
    footer.classList.add("bg-color");
  }
});