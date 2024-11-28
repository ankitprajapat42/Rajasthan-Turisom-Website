function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlide(slideIndex);
}

// Show the initial slide
showSlide(slideIndex);

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}





const myDialog = document.getElementById('myDialog');

function openDialog() {
  myDialog.showModal(); // Open the dialog
}

function closeDialog() {
  myDialog.close(); // Close the dialog
}
