export function positionLetters(
    wheel: HTMLDivElement,
    radius: number = 140,
  ): void {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabet.forEach((letter, index) => {
      const angle = (360 / alphabet.length) * index;
      const positionAngle = (angle - 90) * (Math.PI / 180);
  
      const x = radius * Math.cos(positionAngle);
      const y = radius * Math.sin(positionAngle);
  
      const letterElement = document.createElement("div");
      letterElement.className = `letter letter-${wheel.classList[0]}`;
      letterElement.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
      letterElement.textContent = letter;
      wheel.appendChild(letterElement);
    });
  }
  
  export function updateInnerWheelRotation(shift: number): void {
    const keyInput = document.querySelector<HTMLInputElement>(".keyInput");
    keyInput.value = String(shift);
    const innerWheel = document.querySelector<HTMLElement>(".innerWheel");
    const key = parseInt(keyInput.value, 10) || 0;
    const rotationDegrees = (360 / 26) * key;
    innerWheel.style.transform = `rotate(${rotationDegrees.toFixed(2)}deg)`;
  }