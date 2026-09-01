document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Reasons ---------- */

  var reasons = [
    'Having fun together.',
    'He was taking photos for me because I asked him 🥺',
    'He came to the temple just for my wish. 🥹',
    'He visited my place.',
    'Me just being annoying and irritating him 😂',
    'That cute smile of his.',
    'That haircut I didn’t even notice... so I ignored him 🥺',
    'One of those random handsome moments.',
    'Him with the little baby — such a cute moment.',
    'Little Dariuz 🥹'
  ];


  /* ---------- Photos ---------- */

  var photos = [
    '01.jpeg',
    '02.jpeg',
    '03.jpeg',
    '04.jpeg',
    '05.jpeg',
    '06.jpeg',
    '07.jpeg',
    '08.jpeg',
    '09.jpeg',
    '10.jpeg'
  ];


  /* ---------- Elements ---------- */

  var index = 0;

  var card = document.getElementById('reasonCard');
  var cardIndex = document.getElementById('cardIndex');
  var cardText = document.getElementById('cardText');
  var cardImage = document.getElementById('cardImage');
  var cardBackImage = document.getElementById('cardBackImage');
  var tapHint = document.getElementById('tapHint');
  var nextBtn = document.getElementById('nextBtn');
  var continueLink = document.getElementById('continueLink');


  /* ---------- Number Formatting ---------- */

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }


  /* ---------- Render Card ---------- */

  function renderCard() {

    /* Set number */
    cardIndex.textContent = pad(index + 1);


    /* Set reason */
    cardText.textContent = reasons[index];


    /* Set photo */

    var imagePath = 'assets/images/' + photos[index];

    cardImage.src = imagePath;
    cardBackImage.src = imagePath;


    /* Make sure card starts from front */
    card.classList.remove('flipped');


    /* Show tap hint */
    tapHint.style.opacity = '1';
  }


  /* ---------- Flip Card ---------- */

  card.addEventListener('click', function () {

    card.classList.toggle('flipped');

    tapHint.style.opacity = '0';

  });


  /* ---------- Next Button ---------- */

  nextBtn.addEventListener('click', function () {

    if (index < reasons.length - 1) {

      index++;

      renderCard();

    }


    /* Last card */

    if (index === reasons.length - 1) {

      nextBtn.style.display = 'none';

      continueLink.style.transition =
        'opacity 0.8s ease';

      continueLink.style.opacity = '1';

    }

  });


  /* ---------- Initial Card ---------- */

  renderCard();

});