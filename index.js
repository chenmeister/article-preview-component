var shareButton = document.querySelector('.share_btn');
var bottomDetails = document.querySelector('.bottom_details');

if(shareButton) {
  shareButton.addEventListener("click", function() {
    bottomDetails.classList.toggle('active');
  });
} else {
  console.error("Share Button Not Found!");
}