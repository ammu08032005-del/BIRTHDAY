/* =========================================================
   Memories Page
   Click a photo → open it → show caption
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  var polaroids = document.querySelectorAll('.polaroid');

  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var closeBtn = document.getElementById('lightboxClose');


  /* =====================================================
     OPEN PHOTO
     ===================================================== */

  polaroids.forEach(function (polaroid) {

    var tilt = polaroid.getAttribute('data-tilt') || 0;

    polaroid.style.setProperty('--tilt', tilt);


    polaroid.addEventListener('click', function () {

      var image = polaroid.querySelector('img');

      var caption =
        polaroid.getAttribute('data-caption') || '';


      if (image) {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

      }


      lightboxCaption.textContent = caption;


      lightbox.classList.add('open');

      lightbox.setAttribute(
        'aria-hidden',
        'false'
      );


      /* Prevent background scrolling */

      document.body.style.overflow = 'hidden';

    });

  });


  /* =====================================================
     CLOSE LIGHTBOX
     ===================================================== */

  function closeLightbox() {

    lightbox.classList.remove('open');

    lightbox.setAttribute(
      'aria-hidden',
      'true'
    );


    lightboxImage.src = '';

    lightboxImage.alt = '';


    /* Restore scrolling */

    document.body.style.overflow = '';

  }


  /* Close button */

  closeBtn.addEventListener(
    'click',
    closeLightbox
  );


  /* Click outside photo */

  lightbox.addEventListener(
    'click',
    function (event) {

      if (event.target === lightbox) {

        closeLightbox();

      }

    }
  );


  /* Escape key */

  document.addEventListener(
    'keydown',
    function (event) {

      if (
        event.key === 'Escape' &&
        lightbox.classList.contains('open')
      ) {

        closeLightbox();

      }

    }
  );

});