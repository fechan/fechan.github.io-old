(function () {
  "use strict";
  const taglines = [
    "I like programming, GIS, languages, and games.",
    "Crows are cute!",
    "Best viewed with NCSA Mosaic.",
    "ArcMap has stopped working.",
    "Ask about our enemy discount!",
    "The ducks stay in Central Park, huddling together.",
    "Also check out the 404 page!",
    "Did you get the broom closet ending?",
    "Scrambled eggs in a hot dog bun makes a cheap meal.",
    "Remember to wash your hands and cover your coughs!",
    "Seeking forbidden knowledge",
    "Asking for a friend",
    "Why did the chicken cross the mobius strip?"
  ];
  const regex = /(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/;
  let visits = parseInt(document.cookie.replace(regex, "$1"));
  if (isNaN(visits)){
    document.cookie = "visits=0"
    visits = 0;
  } else { 
    visits++;
    document.cookie = "visits=" + visits;
  }
  window.addEventListener('load', () => {
    document.getElementById("tagline").textContent = taglines[visits % taglines.length];
  });
}());