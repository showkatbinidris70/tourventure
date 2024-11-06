/* Company Name: Nanoit
    Project Name: Digency
    Author: Nanoit
    Version: 1.0
    Created: 2024-10-06
    Description: This is a digital agency website template. 
    License: Your License Information
*/

/* Digency Agency HTML Template*/

// nav scroll start
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("nav-scrolled");
    console.log("OK");
  } else {
    $(".nav").removeClass("nav-scrolled");
  }
});
// nav scroll end

// after scrolling indicate active nav-link start
$(document).on("scroll", function () {
  const sections = $("section");
  const navLinks = $(".nav-link");

  let currentSection = "";

  sections.each(function () {
    const sectionTop = $(this).offset().top;
    const sectionHeight = $(this).outerHeight();
    if ($(window).scrollTop() >= sectionTop - sectionHeight / 3) {
      currentSection = $(this).attr("id");
    }
  });

  navLinks.each(function () {
    $(this).removeClass("active");
    if ($(this).attr("href").includes(currentSection)) {
      $(this).addClass("active");
    }
  });
});
// after scrolling indicate active nav-link end

// navbar nav-link identify start
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");

  // Add smooth scroll on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Remove active class from all links and set the clicked one
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Add scroll event listener for updating active link
  window.addEventListener("scroll", function () {
    let currentSection = "";

    document.querySelectorAll("section").forEach(function (section) {
      const sectionTop = section.offsetTop - 80; // Adjust this value based on your header height
      const sectionHeight = section.clientHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset <= sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update the active class based on the current section in view
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});

// navbar nav-link identify end

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

// counter up start

$(document).ready(function ($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom;
  }
  //Count up code
  function countUp() {
    $(".counter").each(function () {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
        countTo = $this.attr("data-count");
      ended = $this.attr("ended");

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500, //duration of counting
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr("ended", "true");
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView(".counter")) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView(".counter")) {
      countUp();
    }
  });
});

// counter up end

// copy right year start
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// copy right year end

// project slider start
$(".projects-slider").slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 1,
  // dots: true,
  arrows: true,
  autoplay: true,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});
// project slider end

// testimonial slider

// testimonial slider

$(document).ready(function () {
  $(".testimonial-carousel").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// counter up

const duration = 2000; // total duration for all counters to finish in milliseconds

document.querySelectorAll(".count").forEach(function (item) {
  let startNumber = 0;
  const targetNumber = parseInt(item.getAttribute("data-number"), 10);
  const increment = targetNumber / (duration / 10); // adjusts the speed

  function counterUp() {
    startNumber += increment;

    if (startNumber >= targetNumber) {
      item.innerHTML = targetNumber; // Ensure it ends exactly at the target number
      clearInterval(stop);
    } else {
      item.innerHTML = Math.floor(startNumber);
    }
  }

  const stop = setInterval(counterUp, 10); // update every 10ms for a smooth animation
});
