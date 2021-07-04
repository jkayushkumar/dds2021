window.onload = function () {
    GetCounterValue();
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