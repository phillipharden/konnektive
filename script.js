//^ PARTNERS MARQUEE ----------------------------------------------------------------
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  '--marquee-elements-displayed'
);
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elements', marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//^ TESTIMONIAL CAROUSEL ----------------------------------------------------------------


//^ CHANGING TEXT IN HERO SECTION ----------------------------------------------------------------
// Function to change the text in a specific order and loop back to the beginning
function changeText() {
  // Get the h3 element
  var featuresText = document.getElementById('changingFeaturesText');

  // Array of text options
  var textOptions = [
    'No Hidden Fees',
    'No Cost Migrations',
    'Lightning Fast Load Speeds',
    'Scale Seamlessly',
    'Ultra Stable',
    'Reliable',
    'Easy to Use',
  ];

  // Get the current text
  var currentText = featuresText.textContent;

  // Find the index of the current text in the array
  var currentIndex = textOptions.indexOf(currentText);

  // Calculate the next index, looping back to the beginning if necessary
  var nextIndex = (currentIndex + 1) % textOptions.length;

  // Set the new text
  featuresText.textContent = textOptions[nextIndex];
}

// Call the changeText function every 3 seconds
setInterval(changeText, 3000);

//^ GO TO FORM ----------------------------------------------------------------
function redirectToForm() {
  window.location.href = '#formBox';
}

//^   BACK TO TOP BUTTON ----------------------------------------------------------------
// Get the button
let backToTopButton = document.getElementById('backToTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//^ Fade In Down Animation Delay ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var fadeInItems = document.querySelectorAll(".fadeInDown");

  fadeInItems.forEach(function (item, index) {
    item.style.opacity = "0";
    item.style.animation = "fadeInDown 0.7s ease-in-out";
    item.style.animationFillMode = "both";
    item.style.animationDelay = index * .1 + "s";
  });
}); 


//^ SHOW URL INPUT FIELD -----------------------------------------------------------------------
function showWebsiteInput() {
  var websiteInput = document.getElementById('websiteInput');
  websiteInput.style.maxHeight = '300px'; 
  websiteInput.style.overflow = 'visible';
}

function hideWebsiteInput() {
  var websiteInput = document.getElementById('websiteInput');
  websiteInput.style.maxHeight = '0';
  websiteInput.style.overflow = 'hidden';
}
