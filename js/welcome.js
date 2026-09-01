
/* =========================================================
   Welcome Sequence
   One line at a time
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  var lines = [
    document.getElementById('line1'),
    document.getElementById('line2'),
    document.getElementById('line3'),
    document.getElementById('line4')
  ];

  var beginLink = document.getElementById('beginLink');


  /* Animation timing */

  var DURATION = 2800;
  var GAP = 450;

  var STEP = DURATION + GAP;


  /* =====================================================
     SHOW EACH LINE
     ===================================================== */

  lines.forEach(function (line, index) {

    setTimeout(function () {

      line.classList.add('blink-in');

    }, index * STEP);

  });


  /* =====================================================
     SHOW BUTTON AFTER LAST LINE
     ===================================================== */

  setTimeout(function () {

    beginLink.classList.add('show');

  }, (lines.length - 1) * STEP + DURATION + 250);

});