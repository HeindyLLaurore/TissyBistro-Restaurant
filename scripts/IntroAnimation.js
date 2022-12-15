"use strict";

//Intro

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 0.5, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.4 }, "-=1");
tl.fromTo("h1.welcome", { opacity: 0 }, { opacity: 1, duration: 0.75 });
tl.fromTo("h2.welcome", { opacity: 0 }, { opacity: 1, duration: 0.25 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

//  Dark Mode

$(document).ready(function () {
  $(".radio-btn").click(function () {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("dark");
  });
});
