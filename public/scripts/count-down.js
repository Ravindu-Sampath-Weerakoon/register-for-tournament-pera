function getTimeRemaining(endTime) {
    const now = new Date().getTime();
    const distance = endTime - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds
    };
}

// Function to update the countdown display with animation
function updateCountdown() {
    const targetDate = new Date("2024-04-06T00:00:00");
    const timeRemaining = getTimeRemaining(targetDate.getTime());

    const { days, hours, minutes, seconds } = timeRemaining;

    const [daysE,hoursE,minutesE,secondsE] = document.getElementById("countdown").children;

    // countdownElement.textContent = days + "d " + hours.toString().padStart(2, '0') + "h " + minutes.toString().padStart(2, '0') + "m " + seconds.toString().padStart(2, '0') + "s";

    daysE.textContent = days ;
    hoursE.textContent = hours.toString().padStart(2,0);
    minutesE.textContent = minutes.toString().padStart(2,0);
    secondsE.textContent = seconds.toString().padStart(2,0);


    console.log(daysE);

    if (timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0) {

        countdownElement.textContent = "Registration Closed";
    } else {
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();
