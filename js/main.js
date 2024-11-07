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
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  let currentUrl = window.location.pathname.split("/").pop();

  // If no specific page is provided, default to "index.html"
  if (currentUrl === "") {
    currentUrl = "index.html";
  }

  links.forEach((link) => {
    const linkUrl = link.getAttribute("href");
    if (
      linkUrl === currentUrl ||
      (linkUrl === "/" && currentUrl === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// nav-link indicator end
