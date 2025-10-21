const cursor = document.getElementById("cursor");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  circle1.style.left = x + "px";
  circle1.style.top = y + "px";

  circle2.style.left = x + "px";
  circle2.style.top = y + "px";
});

const scrollDown = document.querySelector(".scroll-down");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    scrollDown.classList.add("hidden");
  } else {
    scrollDown.classList.remove("hidden");
  }
});

const confirmation = confirm("Voulez-vous vraiment voir le projet Helium de SALOHY Onnelin dev-front ? \n\nAppuyez sur 'OK' pour confirmer, ou 'Annuler' pour quitter.");
if (!confirmation) {
    window.location.href = "https://www.google.com"; 
}

const h2ToChange = document.querySelector(".networks h2");


const hoverColor = "rgb(124, 73, 165)"; 


function enableLetterHoverEffect(element) {
    const text = element.textContent;
    
    const newHTML = Array.from(text).map(char => {
        
        if (char === ' ') {
            return `<span class="letter-space">${char}</span>`;
        }
        return `<span>${char}</span>`;
    }).join('');

    
    element.innerHTML = newHTML;

    
    const letters = element.querySelectorAll('span');
    
    letters.forEach(span => {
        span.addEventListener("mouseenter", () => {
            span.style.color = hoverColor;
            
            circle1.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        span.addEventListener("mouseleave", () => {
            span.style.color = "white"; 
            
            circle1.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}


enableLetterHoverEffect(h2ToChange);


