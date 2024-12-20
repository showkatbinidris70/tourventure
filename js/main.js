/* Company Name: Nanoit
    Project Name: Digency
    Author: Nanoit
    Version: 1.0
    Created: 2024-10-06
    Description: This is a digital agency website template. 
    License: Your License Information
*/

/* Tourventure Responsive HTML Template*/
// nav scroll start
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav-container").addClass("scrolled");
    console.log("OK");
  } else {
    $(".nav-container").removeClass("scrolled");
  }
});
// nav scroll end

// nav-link indicator start
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll(".nav-link");
//   let currentUrl = window.location.pathname.split("/").pop();

//   if (currentUrl === "") {
//     currentUrl = "index.html";
//   }

//   links.forEach((link) => {
//     const linkUrl = link.getAttribute("href");
//     if (
//       linkUrl === currentUrl ||
//       (linkUrl === "/" && currentUrl === "index.html")
//     ) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// });

// nav-link indicator end

// Array of image data (can be expanded or modified)
const images = [
  { src: "images/hero-img.png", title: "Image 1" },
  { src: "images/world-map.png", title: "Image 2" },
  { src: "images/hero-img.png", title: "Image 3" },
];

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  updateLightbox();
}

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length; // Loop around
  updateLightbox();
}

function updateLightbox() {
  document.getElementById("lightboxImage").src = images[currentIndex].src;
  document.getElementById("lightboxLabel").textContent =
    images[currentIndex].title;
}

// swiper slider start

const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// swiper slider startdaily

document.addEventListener("DOMContentLoaded", function () {
  // Slider 1
  const swiper1 = new Swiper(".destinationSlider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-spain-next",
      prevEl: ".swiper-spain-prev",
    },
    breakpoints: {
      // When the viewport is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When the viewport is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // When the viewport is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  const swiper2 = new Swiper(".destinationItalySlider", {
    loop: true,
    navigation: {
      nextEl: ".slider-italy-next",
      prevEl: ".slider-italy-prev",
    },
    breakpoints: {
      // When the viewport is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When the viewport is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // When the viewport is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  const swiper3 = new Swiper(".destinationDubaiSlider", {
    loop: true,
    navigation: {
      nextEl: ".slider-duabi-next",
      prevEl: ".slider-duabi-prev",
    },
    breakpoints: {
      // When the viewport is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When the viewport is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // When the viewport is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // Slider 2
  const swiper4 = new Swiper(".testimonialSlider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// show more item start
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".destination-country");
  const nextButton = document.getElementById("next-section-btn");
  const sectionsPerStep = 3; // Number of sections to show at each step
  let currentIndex = 3; // Start after the initial 3 sections

  nextButton.addEventListener("click", () => {
    // Show the next set of sections
    for (let i = currentIndex; i < currentIndex + sectionsPerStep; i++) {
      if (sections[i]) {
        sections[i].style.display = "block";
      }
    }

    // Update the current index
    currentIndex += sectionsPerStep;

    // Remove the button when all sections are shown
    if (currentIndex >= sections.length) {
      nextButton.style.display = "none"; // Hide the button
    }
  });
});
// show more item end

// hero lightbox video start
// Showing the video with autoplay
function revealVideo(div, video_id) {
  var videoIframe = document.getElementById(video_id);
  var videoSrc = videoIframe.src;

  // Check if the video URL already contains a "?" (i.e., if it has any existing parameters)
  if (videoSrc.indexOf("?") == -1) {
    videoIframe.src = videoSrc + "?autoplay=1"; // If no parameters, start with ?
  } else {
    videoIframe.src = videoSrc + "&autoplay=1"; // If there are existing parameters, append with &
  }

  document.getElementById(div).style.display = "block"; // Show the video container
}

// Hiding the video and removing autoplay
function hideVideo(div, video_id) {
  var videoIframe = document.getElementById(video_id);
  var videoSrc = videoIframe.src;

  // Remove the "autoplay=1" part of the URL
  var cleanedSrc = videoSrc
    .replace("&autoplay=1", "")
    .replace("?autoplay=1", "");
  videoIframe.src = cleanedSrc;

  document.getElementById(div).style.display = "none"; // Hide the video container
}
// hero lightbox video end
