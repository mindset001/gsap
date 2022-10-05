
$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: ["firstPage", "secondPage", "thirdPage"],
		menu: "#menu",
		autoScrolling:false
		// responsiveWidth: 750
	});
});




// ScrollMagic: init controller
var controller = new ScrollMagic.Controller();

// Tween - Section 2
var scene = new ScrollMagic.Scene({
	triggerElement: "#section2"
})
// animate color and top border in relation to scroll position
.setTween("#bg img", {
	maxWidth: "1200px",
	top: "30%",
	left: "80%",
	opacity: 0.25
}) // the tween durtion can be omitted and defaults to 1
// .addIndicators({ name: "2 (duration: 100)" }) // add indicators (requires plugin)
.addTo(controller);






// Tween - Section 3
var scene = new ScrollMagic.Scene({
	triggerElement: "#section3",
	duration: 300
})

// animate color and top border in relation to scroll position
.setTween("#bg img", {
	top: "20%"
}) // the tween duration can be omitted and defaults to 1

// Add indicators (required plugin)
.addTo(controller);


// cursor

var cursor = document.querySelector(".cursor"),
    cursorScale = document.querySelectorAll(".cursor-scale")

    mouseX = 0,
    mouseY = 0

    gsap.to({}, 0.016, {
        repeat: -1,

        onRepeat: function(){
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    });

    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX,
        mouseY = e.clientY
    });

    cursorScale.forEach(Link => {
        Link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
            cursor.classList.remove('grow-small');
        });
        Link.addEventListener('mousemove', ()=> {
            cursor.classList.add('grow');
            if(Link.classList.contains('small')){
                cursor.classList.remove('grow');
                cursor.classList.add('grow-small');
            }
        })
    })

    const myText = new SplitType('#my-text')

        gsap.to('.word', {
            y: 0,
            stagger: 0.05,
            delay: 0.1,
            duration: .1
        })

