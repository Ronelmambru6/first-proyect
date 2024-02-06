document.addEventListener('scroll', function () {
  var content = document.getElementById('content');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    content.classList.add('slide-animation');
  } else {
    content.classList.remove('slide-animation');
  }
});