document.addEventListener('DOMContentLoaded', function () {

  var heart = document.getElementById('finalHeart');
  var reveal = document.getElementById('revealContent');

  var opened = false;

  if (!heart || !reveal) return;

  heart.addEventListener('click', function () {

    if (opened) return;

    opened = true;

    // Hide the heart
    heart.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    heart.style.opacity = '0';
    heart.style.transform = 'scale(0.8)';

    // Reveal the birthday message
    setTimeout(function () {

      heart.style.display = 'none';

      reveal.classList.add('show');

    }, 600);

  });

});