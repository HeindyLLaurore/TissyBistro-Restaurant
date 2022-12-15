"use strict";

//Intro

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("h1.welcome", { opacity: 0 }, { opacity: 1, duration: 0.75 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.5 });

//  Dark Mode

$(document).ready(function () {
  $(".radio-btn").click(function () {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("dark");
  });
});
