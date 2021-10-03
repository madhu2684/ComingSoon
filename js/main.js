const countdown = document.querySelector(".countdown");
const launchDate = new Date("Aug 1, 2020 00:00:00").getTime();

const intvl = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
  `;

  if (distance < 0) {
    clearInterval(intvl);
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!!";
  }
}, 1000);
