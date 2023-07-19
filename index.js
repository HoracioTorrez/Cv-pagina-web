
var shareButton = document.getElementById('shareButton');
var socialIcons = document.getElementById('socialIcons');

shareButton.addEventListener('click', function() {
  socialIcons.classList.toggle('show');
  socialIcons.style.flexDirection = 'row'; // Mostrar los iconos en una fila

  var images = socialIcons.getElementsByTagName('img');
  var delay = 600; // Retraso entre cada aparición de imagen en milisegundos

  function showImages(index) {
    if (index < images.length) {
      setTimeout(function() {
        images[index].style.opacity = '1';
        showImages(index + 1);
      }, delay);
    }
  }

  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = '0';
    images[i].style.transition = 'opacity 0.5s';
  }

  showImages(0);
});
function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);









