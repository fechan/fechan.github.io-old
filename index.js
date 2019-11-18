let taglines = [
    "I like programming, GIS, languages, and games.",
    "Crows are cute!",
    "Best viewed with NCSA Mosaic.",
    "ArcMap has stopped working.",
    "Ask about our enemy discount!",
    "The ducks stay in Central Park, huddling together.",
    "Also check out the 404 page!",
    "Did you get the broom closet ending?",
    "Scrambled eggs in a hot dog bun makes a cheap meal"
];
let visits = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
if (isNaN(visits)){
    document.cookie = "visits=0"
    visits = 0;
} else { 
    visits++;
    document.cookie = "visits=" + visits;
}
window.onload = () => document.getElementById("tagline").innerHTML = taglines[visits % taglines.length];