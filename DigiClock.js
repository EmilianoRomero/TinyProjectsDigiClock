const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

const twoDigitsFormat = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//time passing by function
const tick = () => {
    const now = new Date();
    
    const h = twoDigitsFormat(now.getUTCHours());
    const m = twoDigitsFormat(now.getUTCMinutes());
    const s = twoDigitsFormat(now.getUTCSeconds());
    
    const html = `
    <span class="rounded-left" id="hour">${h}</span> :
    <span class="rounded-0" id="min">${m}</span> :
    <span class="rounded-right" id="sec">${s}</span>
    `;

    clock.innerHTML = html;

    date.innerHTML = (dateFns.format(now, "dddd Do MMMM, YYYY"));
};

//creates a new time info every second that goes by
setInterval(tick, 1000);