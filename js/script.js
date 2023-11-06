
var link = document.querySelector(".help");
var popup = document.querySelector(".feedback-form");


if (link){
	link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		var closeForm = popup.querySelector(".modal-close");
		if (closeForm) {
			closeForm.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
})}})};



var map = document.querySelector(".save-back");
var popupMap = document.querySelector(".modal");

if (map) {
	map.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.add("modal-show");
		var closeForm = popupMap.querySelector(".modal-close");
		if (closeForm) {
			closeForm.addEventListener("click", function(evt) {
			evt.preventDefault();
			popupMap.classList.remove("modal-show");
})}})};





var bookmark = document.querySelectorAll(".buy");
var popupBookmark = document.querySelector(".modal-access");

console.log(bookmark);

if (popupBookmark) {
	for (var i = 0; i <= bookmark.length; i++) {
		bookmark[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			console.log("KLICK");
			popupBookmark.classList.add("modal-show");
			var closeForm = popupBookmark.querySelector(".modal-close");
			if (closeForm) {
				closeForm.addEventListener("click", function(evt) {
				evt.preventDefault();
				popupBookmark.classList.remove("modal-show");
})}})}};


var firstSlaid = document.querySelector(".slaid-one");
var secondSlaid = document.querySelector(".slaid-two");
var controlSlaid1 = document.querySelector(".control-slaid-1");
var controlSlaid2 = document.querySelector(".control-slaid-2");
var nextSlaid = document.querySelector(".button-next");
var backSlaid = document.querySelector(".button-back");


var slaider = [firstSlaid, secondSlaid];

var i = 0;

nextSlaid.onclick = function() {
  slaider[i].classList.remove('slaid-active');
  i++;

  if (slaider.length <= i) {
    i = 0;
  };

  slaider[i].classList.add('slaid-active');
};

backSlaid.addEventListener('click', function () {
  slaider[i].classList.remove('slaid-active');
  i--;

  if (i < 0) {
    i = slaider.length - 1;
  };

  slaider[i].classList.add('slaid-active');
});
