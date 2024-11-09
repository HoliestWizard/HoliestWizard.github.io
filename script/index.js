

hideAllSlides();
showSlide('slide-1')

function hideAllSlides() {
    document.querySelectorAll('.slide').forEach((e)=> {
        e.style.display = "none";
    })
}
function showSlide(id) {
    document.getElementById(id).style.display = "block";
}


document.getElementById('slide-1-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-1')
}
document.getElementById('slide-2-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-2')
}
document.getElementById('slide-3-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-3')
}
document.getElementById('slide-4-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-4')
}
document.getElementById('slide-5-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-5')
}
document.getElementById('slide-6-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-6')
}
document.getElementById('slide-7-tab').onclick = function(e) {
    hideAllSlides()
    showSlide('slide-7')
}
