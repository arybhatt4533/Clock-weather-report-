// DIGITAL CLOCK
function updateDigitalClock() {
    const clock = document.getElementById("digitalClock");
    const now = new Date();

    // Format time as HH:MM:SS with leading zeros
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hh}:${mm}:${ss}`;
}
setInterval(updateDigitalClock, 1000);
updateDigitalClock();

// ANALOG CLOCK
function updateAnalogClock() {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    document.getElementById("secondHand").style.transform =
        `rotate(${sec * 6}deg)`;

    document.getElementById("minuteHand").style.transform =
        `rotate(${min * 6}deg)`;

    document.getElementById("hourHand").style.transform =
        `rotate(${hr * 30 + min * 0.5}deg)`;
}

setInterval(updateAnalogClock, 1000);
updateAnalogClock();
