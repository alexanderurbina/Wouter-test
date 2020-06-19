"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var img = document.getElementsByClassName("middle")[0].getElementsByTagName("img");
  for (var i = 0; i < img.length; i++) {
    var element = img[i];
    element.addEventListener('click', function () {
      showModal();
    });
  }
});

function showModal() {
  var modalDlg = document.querySelector('#image-modal');
  var imageModalCloseBtn = document.querySelector('#image-modal-close');
  modalDlg.classList.add('is-active');
  imageModalCloseBtn.addEventListener('click', function () {
    modalDlg.classList.remove('is-active');
  });
}