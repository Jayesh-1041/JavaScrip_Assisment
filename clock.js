    function updateClock() {
    
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // Time Format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    if(hours < 12){
        session = "AM";
    }
    
    if(hours > 12){
        session = "PM";
    }
    
    // Date Format
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const monthName = months[now.getMonth()];
    const weekday = weekdays[now.getDay()];
   

    const date = `${weekday}, ${day} ${monthName} ${year}`;
    const time = `${hours}:${minutes}:${seconds}:${session}`;


    clockElement.innerHTML = `<div class="day">${date}</div>,<div class="date">${time}</div>`;
    }

    setInterval(updateClock, 1000);

    updateClock();