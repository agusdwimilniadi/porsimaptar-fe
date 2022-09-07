gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
  gsap.from("#judul-header", {
    scale: 0,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 0.3,
  });
  gsap.to("#judul-header", {
    scale: 1,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.fromTo("#cloud-left", { x: -600 }, { x: 0, duration: 1.5, delay: 1.4 });
  gsap.fromTo("#cloud-left-2", { x: 600 }, { x: 0, duration: 1.5, delay: 1.4 });
  gsap.fromTo("#cloud-left-2", { x: 600 }, { x: 0, duration: 1.5, delay: 1.4 });
  gsap.fromTo(".fire-cloud", { x: -600 }, { x: 0, duration: 1.5, delay: 1.4 });
  gsap.fromTo(".fire-cloud-2", { x: 600 }, { x: 0, duration: 1.5, delay: 1.4 });

  gsap.fromTo(
    "#maskot-1",
    { x: -600, y: 600 },
    { x: 0, y: 100, duration: 1.5, delay: 2.4 }
  );
  gsap.fromTo(
    "#maskot-2",
    { x: 600, y: 600 },
    { x: 0, y: 100, duration: 1.5, delay: 2.4 }
  );

  gsap.to(".maskotq", {
    ease: "none",
    scrollTrigger: {
      scrub: 1,
    },
    scale: -0.5,
  });
  gsap.to("#judul-header", {
    ease: "none",
    scrollTrigger: {
      scrub: 0.3,
    },
    y: 1000,
  });
  gsap.to(".bg-bidang-img", {
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
    },
    scale: 1.5,
  });
  gsap.to("#text-bidang", {
    ease: "none",
    scrollTrigger: {
      scrub: 0.3,
    },
    y: 500,
  });
});
