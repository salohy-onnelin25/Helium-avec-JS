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

const confirmation = confirm("Voulez-vous vraiment voir mon projet Helium ? \n\nAppuyez sur 'OK' pour confirmer, ou 'Annuler' pour quitter.");
if (!confirmation) {
    window.location.href = "https://www.google.com"; 
}

const h2ToChange = document.querySelector(".networks h2");

// Définissez la couleur de survol (correspondant à $peurple en CSS)
const hoverColor = "rgb(124, 73, 165)"; 

/**
 * Fonction pour envelopper chaque lettre du H2 dans un span et ajouter les écouteurs d'événements.
 */
function enableLetterHoverEffect(element) {
    const text = element.textContent;
    // Crée une nouvelle chaîne HTML où chaque caractère est dans un span
    const newHTML = Array.from(text).map(char => {
        // S'il s'agit d'un espace, ajoute une classe pour gérer l'espacement
        if (char === ' ') {
            return `<span class="letter-space">${char}</span>`;
        }
        return `<span>${char}</span>`;
    }).join('');

    // Remplace le contenu original du H2 par le nouveau HTML
    element.innerHTML = newHTML;

    // Applique les écouteurs d'événements à chaque nouveau span
    const letters = element.querySelectorAll('span');
    
    letters.forEach(span => {
        span.addEventListener("mouseenter", () => {
            span.style.color = hoverColor;
            // Optionnel: Agrandir le cercle de traînée quand une lettre est survolée
            circle1.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        span.addEventListener("mouseleave", () => {
            span.style.color = "white"; // Rétablissement de la couleur par défaut
            // Optionnel: Rétablir la taille du cercle de traînée
            circle1.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Appelez la fonction pour initialiser l'effet
enableLetterHoverEffect(h2ToChange);


