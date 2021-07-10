// gsap.registerPlugin(ScrollTrigger);

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

console.log( document.getElementsByClassName('elfsight-app-c5376cce-96fe-447f-af0f-b3ab7b8fe20d')[0]);