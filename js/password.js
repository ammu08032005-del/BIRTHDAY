(function () {

  var CORRECT_PASSWORD = '06092003';

  document.addEventListener('DOMContentLoaded', function () {

    var preline = document.getElementById('preline');
    var datestamp = document.getElementById('datestamp');
    var lockblock = document.getElementById('lockblock');

    var form = document.getElementById('passForm');
    var input = document.getElementById('passInput');
    var error = document.getElementById('errorMsg');

    requestAnimationFrame(function () {

      setTimeout(function () {
        datestamp.classList.add('is-visible');
      }, 500);

      setTimeout(function () {
        lockblock.classList.add('is-visible');
      }, 1000);

    });

    form.addEventListener('submit', function (e) {

      e.preventDefault();

      var value = input.value.replace(/\s/g, '');

      if (value === CORRECT_PASSWORD) {

        try {
          sessionStorage.setItem('dariuz_unlocked', 'true');
        } catch (err) {}

        lockblock.style.transition =
          'opacity 0.7s ease, transform 0.7s ease';

        lockblock.style.opacity = '0';
        lockblock.style.transform = 'translateY(-8px)';

        preline.style.opacity = '0';
        datestamp.style.opacity = '0';

        setTimeout(function () {
          window.location.href = 'welcome.html';
        }, 700);

      } else {

        error.textContent = 'hmm... try again ♡';
        error.classList.add('show');

        lockblock.classList.remove('shake');

        void lockblock.offsetWidth;

        lockblock.classList.add('shake');

        input.value = '';

        input.focus();

        setTimeout(function () {
          lockblock.classList.remove('shake');
        }, 400);
      }

    });

    input.addEventListener('input', function () {
      error.classList.remove('show');
    });

  });

})();