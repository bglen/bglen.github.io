/*
Brian Glen
January 22, 2019
modal.js
*/

function modal(elem){
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("modal-image");
	var captionText = document.getElementById("modal-caption");

	modal.style.display = "block";
	modalImg.src = elem.src;
	captionText.innerHTML = elem.alt;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
}