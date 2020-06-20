"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var img = document.getElementsByClassName("middle")[0].getElementsByTagName("img");
  for (var i = 0; i < img.length; i++) {
    var element = img[i];
    element.addEventListener("click", function () {
      showModal();
    });
  }
});

function showModal() {
  var modalDlg = document.querySelector("#image-modal");
  var imageModalCloseBtn = document.getElementsByClassName("image-modal-close");
  var modalBackground = document.getElementsByClassName("modal-background")[0];
  modalDlg.classList.add("is-active");
  modalBackground.addEventListener("click", function () {
    modalDlg.classList.remove("is-active");
  });
  for (var i = 0; i < imageModalCloseBtn.length; i++) {
    var element = imageModalCloseBtn[i];
    element.addEventListener("click", function () {
      modalDlg.classList.remove("is-active");
    });
  }
}