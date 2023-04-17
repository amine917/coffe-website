gsap.registerPlugin(ScrollTrigger);

let headAnimation = gsap.timeline().from("header .head", {
  duration: 0.8,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: "body",
  toggleActions: "play none none reverse",
  animation: headAnimation,
});

let cardsTimeLine = gsap
  .timeline()
  .from(".shop-values h1", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    ease: Power4.easeIn,
  })
  .from(".shop-value", {
    y: 150,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
ScrollTrigger.create({
  trigger: "body",
  toggleActions: "play none none reverse",
  animation: cardsTimeLine,
});

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 921px)": function () {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    // todo about animation

    let aboutAnimation = gsap
      .timeline()
      .from(".about-desc", {
        y: 100,
        scale: 0,
        opacity: 0,
        duration: 1,
      })
      .from(".about-desc h1", {
        y: 100,
        opacity: 0,
        duration: 1,
      })
      .from(".about-desc p", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
      .from(
        ".about-img",
        {
          opacity: 0,
          scale: 0,
          duration: 1.5,
          ease: Power4.easeIn,
        },
        0
      );
    ScrollTrigger.create({
      trigger: ".about",
      toggleActions: "play none none reverse",
      animation: aboutAnimation,
      start: "top 92%",
    });
  },
});

// todo gallery animation
let galleryAnimation = gsap.timeline().from(".gallery", {
  duration: 0.2,
  opacity: 0,
  scale: 0.8,
});

ScrollTrigger.create({
  trigger: ".gallery",
  // toggleActions: "play none none reverse",
  animation: galleryAnimation,
  start: "top center",
});

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 1450px)": function () {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

    let tl = gsap
      .timeline()
      .from(".left", {
        scaleX: 0,
        duration: 1,
        opacity: 0,
      })
      .from(".left .logo-foot", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
      })
      .from(".left h1", { y: 100, opacity: 0, duration: 1 })
      .from(
        " .links img",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.5"
      );

    ScrollTrigger.create({
      trigger: "body",
      // toggleActions: "play none none reverse",
      animation: tl,
    });
  },
});
