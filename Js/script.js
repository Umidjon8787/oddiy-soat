

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    

    if(hours == 0){
        hours = 24;
        
    }

    if (hours > 24) {
        hours = hours - 24;
    }

    hours = (hours < 10) ? "0" + hours:hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("ClockDisplay").innerText = time;

    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();