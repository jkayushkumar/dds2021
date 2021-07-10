//gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".flyIn_left").forEach(function (elem) {
//     gsap.from(elem, {
//         scrollTrigger: {
//             trigger: elem,
//             start: "top 60%",
//             end: "100px 20%",
//             toggleActions: "restart complete none reverse"
//         },
//         x: 200,
//         autoAlpha: 0,
//         ease: "expo",
//         duration: 2
//     })
// });

window.onload = function () {
    GetCounterValue();
}

window.addEventListener("mousemove", parallaxBack);
function parallaxBack(e) {
    document.querySelectorAll('.parallax').forEach(parallax => {
        const speed = parallax.getAttribute('speed');
        const x = (window.innerWidth - e.pageX * speed) / 200;
        const y = (window.innerWidth - e.pageY * speed) / 200
        parallax.style.transform = `translate(${x}px,${y}px)`;
    })
}

var slideIndex = 1;
var initialN = 0;
showSlides(slideIndex);

function nextMsg(n) {
    initialN = n;
    showSlides(slideIndex += n);    
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].animate([
            { opacity: 1, transform: 'translateX(0)' },
            { opacity: 0, transform: 'translateX(-100%)' }
        ], {
            duration: 500,
            iterations: 1
        });
        slides[i].style.display = "none";
    }
    if (!(slides[slideIndex - 1] == undefined)) {
        slides[slideIndex - 1].style.display = "flex";
        setTimeout(function () {
            slides[slideIndex - 1].style.opacity = "1";
        }, 10);
        if (initialN > 0) {
            slides[slideIndex - 1].animate([
                { opacity: 0, transform: 'translateX(100%)' },
                { opacity: 1, transform: 'translateX(0)' }
            ], {
                duration: 500,
                iterations: 1
            });
        }
        else {
            slides[slideIndex - 1].animate([
                { opacity: 0, transform: 'translateX(-100%)' },
                { opacity: 1, transform: 'translateX(0)' }
            ], {
                duration: 500,
                iterations: 1
            });
        }

    }
    //ScrollTrigger.refresh()
}

function GetCounterValue() {
    var target = new Date(2021, 6, 25, 0, 0, 0, 0);
    var diff = target.getTime() - (new Date()).getTime();
    var remainingDays = diff / (1000 * 60 * 60 * 24);
    var remainingHours = (remainingDays - Math.trunc(remainingDays)) * 24;
    var remainingMin = (remainingHours - Math.trunc(remainingHours)) * 60;
    var remainingSec = (remainingMin - Math.trunc(remainingMin)) * 60;
    var counterValue = [Math.trunc(remainingDays), Math.trunc(remainingHours), Math.trunc(remainingMin), Math.trunc(remainingSec)];
    document.getElementById('counter').innerHTML = counterValue[0] + ' days ' + counterValue[1] + ' hours ' + counterValue[2] + ' minutes ' + counterValue[3] + ' seconds to go !';
    setTimeout(GetCounterValue, 1000);

}