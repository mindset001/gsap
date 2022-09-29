var rule = CSSRulePlugin.getRule("span:after")
// gsap.from('.anim1', {opacity: 0, duration: 1, y: -50, stagger: 0.6})
// gsap.from('img', {duration: 1, opacity: 0, y: 50, delay: 1.4 })
// gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1})
// gsap.from('aside', {duration: 1, opacity: 0, backgroundPosition: '200px 0', delay: 1})


var tl = gsap.timeline({dafaults: {duration:1}})
tl.from('.anim1', {opacity: 0, y: -50, stagger: 0.6})
.to(rule, {cssRule: {scaleY: 0}, duration: 1.8}, "-=2.2")
.from('aside', { opacity: 0, backgroundPosition: '200px 0'}, "-=1.5")
.from('img', { opacity: 0, y: 50, }, "-=1.5")

document.getElementById('cta').addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse()
})

var tween = gsap.to(".green", {
duration: 4, 
x: 750, 
rotation: 360, 
ease: "none", 
paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
