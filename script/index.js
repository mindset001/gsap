TweenMax.from('.wrapper',1, {delay: 4, opacity:0, y: 1000, ease: Expo.ease})

TweenMax.to(".overlay h1", 2, {
    delay: 4,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2, {
  delay: .9,
  opacity: 0,
  y: -20,
  ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
  delay: 3,
  top: "-100%",
  ease: Expo.easeInOut
})
// TweenMax.from('body',1, {delay: 4, opacity:0, ease: Expo.easeInOut})
TweenMax.from(".ellipse-container", 1, {
  delay: 5,
  opacity: 0,
  top: "-100%",
  ease: Expo.easeInOut
})

TweenMax.from(".yellow", 1, {
  delay: 3.5,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from(".circle1", 1, {
  delay: 6.4,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from(".circle2", 1, {
  delay: 6.6,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
  delay: 5,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut
})

TweenMax.from(".text .title", 1, {
  delay: 5,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
})

TweenMax.from(".text p", 1, {
  delay: 5.2,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
})

TweenMax.from(".watchnow", 1, {
  delay: 5.4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 1, {
  delay: 5,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut
}, 0.08)

TweenMax.staggerFrom(".menu ul li", 2, {
  delay: 3,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut
}, 0.08)