document.addEventListener("DOMContentLoaded", () => {
  let img = document
    .getElementsByClassName("middle")[0]
    .getElementsByTagName("img");
  for (let i = 0; i < img.length; i++) {
    const element = img[i];
    element.addEventListener("click", () => {
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
  for (let i = 0; i < imageModalCloseBtn.length; i++) {
    const element = imageModalCloseBtn[i];
    element.addEventListener("click", function () {
      modalDlg.classList.remove("is-active");
    });
  }
}
