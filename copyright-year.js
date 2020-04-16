(function() {
  "use strict";
  const WRITTEN_YEAR = new Date("March 31 2020").getFullYear();
  window.addEventListener('load', init);
  function init() {
    let yearElem = document.getElementById('copy-year');
    let currentYear = new Date().getFullYear();
    if (currentYear > WRITTEN_YEAR) {
      yearElem.textContent = WRITTEN_YEAR + "-" + currentYear;
    }
  }
}());