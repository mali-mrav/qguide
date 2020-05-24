var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Pokreni';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Zaustavi';
	playing = true;
	slideInterval = setInterval(nextSlide,10000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};



/* IPOD JE SKRIPTA ZA POZADINU */

var els = document.querySelectorAll('.vh-fix')
if (!els.length) return

for (var i = 0; i < els.length; i++) {
  var el = els[i]
  if (el.nodeName === 'IMG') {
    el.onload = function() {
      this.style.height = this.clientHeight + 'px'
    }
  } else {
    el.style.height = el.clientHeight + 'px'
  }
}