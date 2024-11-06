/* Company Name: Nanoit
    Project Name: Digency
    Author: Nanoit
    Version: 1.0
    Created: 2024-10-06
    Description: This is a digital agency website template. 
     License: Your License Information
*/

/* Digency Agency HTML Template*/

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Target all sections with class '.content'
const revel_content = document.querySelectorAll(".revel-content");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const p = document.querySelectorAll("p");
const sub_title = document.querySelectorAll(".sub-title");
const btn_view_service = document.querySelectorAll(".btn-view-service");

// Apply GSAP animation to each section
revel_content.forEach((revel_content) => {
  gsap.fromTo(
    revel_content,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: revel_content,
        start: "top 100%",
        once: true,
      },
    }
  );
});

// about section parallax used
window.addEventListener("scroll", () => {
  const aboutImgFast = document.querySelector(".about-img-fast");
  const aboutImgDelay = document.querySelector(".about-img-delay");

  // Parallax effect (bottom-to-top scroll)
  gsap.to(aboutImgFast, {
    y: -window.scrollY * 0.1, // Reverse the direction with negative value
    ease: "power1.out",
  });

  gsap.to(aboutImgDelay, {
    y: -window.scrollY * 0.2, // Reverse the direction with negative value
    ease: "power1.out",
  });
});
