document.addEventListener('DOMContentLoaded', () => {
  let img = document.getElementsByClassName("middle")[0].getElementsByTagName("img");
  for (let i = 0; i < img.length; i++) {
    const element = img[i];
    element.addEventListener('click', () => {showModal();});
  }
});

function showModal() {
  var modalDlg = document.querySelector('#image-modal');
  var imageModalCloseBtn = document.querySelector('#image-modal-close');
    modalDlg.classList.add('is-active');
    imageModalCloseBtn.addEventListener('click', function(){
    modalDlg.classList.remove('is-active');
});
}