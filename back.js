
function changeBg()
{   
  var images = ['url("images/main.jpg")','url("images/beauty.jpg")','url(images/nasa.jpg)'];
  var header = document.querySelector('header');
  var bg = images[Math.floor(Math.random() * images.length)];
  header.style.backgroundImage = bg ;
}
setInterval(changeBg,5000);


