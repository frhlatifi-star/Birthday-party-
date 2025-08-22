function openCard() {
  document.getElementById('card').style.display = 'block';
  startCountdown();
}

function startCountdown() {
  const countdown = document.getElementById('countdown');
  const eventDate = new Date("2025-08-26T17:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(interval);
      countdown.innerHTML = "🎉 تولد شروع شد!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `⏳ ${days} روز، ${hours} ساعت، ${minutes} دقیقه، ${seconds} ثانیه تا تولد`;
  }, 1000);
}

let guestCount = 0;
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  guestCount++;
  document.getElementById('guestCount').innerText = guestCount;
  alert("حضور شما ثبت شد! 🎈");
});
