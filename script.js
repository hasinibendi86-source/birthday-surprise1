document.addEventListener("DOMContentLoaded", () => {
  const reel = document.querySelector(".reel");
  if (reel && !reel.dataset.cloned) {
    const original = [...reel.children];
    original.forEach(card => reel.appendChild(card.cloneNode(true)));
    reel.dataset.cloned = "true";
  }

  const confetti = document.querySelector(".confetti");
  if (confetti) {
    for(let i=0;i<65;i++){
      const piece=document.createElement("i");
      piece.style.left=Math.random()*100+"%";
      piece.style.top=(-10-Math.random()*30)+"%";
      piece.style.animationDuration=(4+Math.random()*5)+"s";
      piece.style.animationDelay=(Math.random()*5)+"s";
      piece.style.transform=`rotate(${Math.random()*360}deg)`;
      confetti.appendChild(piece);
    }
  }

  // Countdown on the opening page — the button unlocks only after 3 → 2 → 1.
  const countdown = document.querySelector(".countdown");
  const openBtn = document.querySelector(".surprise-btn");
  if (countdown && openBtn) {
    let n = 3;
    openBtn.classList.add("is-disabled");
    openBtn.setAttribute("aria-disabled", "true");
    openBtn.setAttribute("tabindex", "-1");
    const timer = setInterval(() => {
      n--;
      if (n > 0) {
        countdown.textContent = n;
      } else {
        countdown.textContent = "OPEN 💗";
        openBtn.classList.remove("is-disabled");
        openBtn.removeAttribute("aria-disabled");
        openBtn.removeAttribute("tabindex");
        clearInterval(timer);
      }
    }, 1000);
  }

  // Type the final message paragraph-by-paragraph for a personal feel.
  const message = document.querySelector("#messageBox");
  if (message) {
    const paragraphs = [...message.querySelectorAll("p")];
    paragraphs.forEach((p, index) => {
      const full = p.textContent;
      p.textContent = "";
      p.style.opacity = "1";
      const delay = index * 2100;
      setTimeout(() => {
        let i = 0;
        const speed = 22;
        const type = () => {
          if (i < full.length) {
            p.textContent += full.charAt(i++);
            setTimeout(type, speed);
          }
        };
        type();
      }, delay);
    });
  }
});
