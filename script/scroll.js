gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%", 
    end: "center 40%",
    toggleActions: "restart pause resume reset",
    // end: () => `+=${document.querySelector(".square").offsetHeight}`,
    
    markers: true,
    toggleClass: 'blue',
    markers: {
      startColor: 'red',
      endColor: 'blue',
      fontSize: '2rem',
      // indent: 200,
      
    }
  }
})