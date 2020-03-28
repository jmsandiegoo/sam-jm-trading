// Fix the 100vh problem
window.onresize = function() {
    var landingSection = document.querySelector(".landing-section");
    landingSection.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.