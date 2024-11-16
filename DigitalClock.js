function clock() {
  const hourElement = document.querySelector(".hour");
  const minElement = document.querySelector(".min");
  const secElement = document.querySelector(".sec");

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    hourElement.textContent = hours;
    minElement.textContent = minutes;
    secElement.textContent = seconds;
  }

  updateTime();

  setInterval(updateTime, 1000);
}

export default clock;