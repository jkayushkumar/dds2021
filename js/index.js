window.onload = function () {
    GetCounterValue();
    var drone = document.getElementById("droneId");
    var area = document.getElementById("moveArea");


    // document.addEventListener("click", getClickPosition, false);
    // function getClickPosition(e) {
    //     var xPosition = (e.clientX - 60 + $(window).scrollLeft()) * 2.5;
    //     var yPosition = (e.clientY - 50 + $(window).scrollTop()) * 2.5;
    //     // console.log(xPosition,yPosition,$(window).scrollLeft(),$(window).scrollTop());
    //     var translate3Dvalue = "scale(0.4) translate3d(" + xPosition + "px," + yPosition + "px,0)";
    //     drone.style.transform = translate3Dvalue;
    // }

}

// function zoomInFade(id) {
//     var element = document.getElementById(id);
//     var translate3Dvalue = "scale(10)";
//     element.style.transform = translate3Dvalue;
//     element.style.opacity = 0;

//     setTimeout(function () {
//         document.getElementById("in").classList.toggle("noDisplay");
//         document.getElementById("in").style.opacity = 1;
//     }, 2000);
// }

function GetCounterValue() {
    var target = new Date(2021, 5, 1, 0, 0, 0, 0);
    var diff = target.getTime() - (new Date()).getTime();
    var remainingDays = diff / (1000 * 60 * 60 * 24);
    var remainingHours = (remainingDays - Math.trunc(remainingDays)) * 24;
    var remainingMin = (remainingHours - Math.trunc(remainingHours)) * 60;
    var remainingSec = (remainingMin - Math.trunc(remainingMin)) * 60;
    var counterValue = [Math.trunc(remainingDays), Math.trunc(remainingHours), Math.trunc(remainingMin), Math.trunc(remainingSec)];

    document.getElementById('counter').innerHTML = counterValue[0] + ' days ' + counterValue[1] + ' hours ' + counterValue[2] + ' minutes ' + counterValue[3] + ' seconds remaining !';
    setTimeout(GetCounterValue, 1000);

}