const countdown = document.querySelector('.item-content__wrapper--countdown');


export function startCountdown(el) {
    let [hours, minutes, seconds] = el.dataset.time
        .split(':')
        .map(Number);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const timer = setInterval(() => {

        if (totalSeconds <= 0) {
            clearInterval(timer);
            el.textContent = '00:00:00';
            return;
        }

        totalSeconds--;

        const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const s = String(totalSeconds % 60).padStart(2, '0');

        el.textContent = `${h}:${m}:${s}`;

    }, 1000);
}
if(countdown){
    startCountdown(countdown);
}