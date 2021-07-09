function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minit = date.getMinutes();
    let second = date.getSeconds();

    


    

    let session = 'AM';
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }


    hours = (hours < 10) ? '0' + hours : hours;
    minit = (minit < 10) ? '0' + minit : minit;
    second = (second < 10) ? '0' + second : second;
    

    let time = hours + ':' + minit + ':' + second + ' ' + session; 
    
    

    document.querySelector('#myTime').innerText = time;
    

    setTimeout(showTime, 1000);


}

showTime();
