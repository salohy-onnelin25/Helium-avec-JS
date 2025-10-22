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

const confirmation = confirm(
  "Voulez-vous vraiment voir le projet Helium de SALOHY Onnelin dev-front ? \n\nAppuyez sur 'OK' pour confirmer, ou 'Annuler' pour quitter."
);
if (!confirmation) {
  window.location.href = "https://www.google.com";
}

const h2ToChange = document.querySelector(".networks h2");

const hoverColor = "rgb(124, 73, 165)";

function enableLetterHoverEffect(element) {
  const text = element.textContent;

  const newHTML = Array.from(text)
    .map((char) => {
      if (char === " ") {
        return `<span class="letter-space">${char}</span>`;
      }
      return `<span>${char}</span>`;
    })
    .join("");

  element.innerHTML = newHTML;

  const letters = element.querySelectorAll("span");

  letters.forEach((span) => {
    span.addEventListener("mouseenter", () => {
      span.style.color = hoverColor;

      circle1.style.transform = "translate(-50%, -50%) scale(1.5)";
    });

    span.addEventListener("mouseleave", () => {
      span.style.color = "white";

      circle1.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
}

enableLetterHoverEffect(h2ToChange);

const footer = document.querySelector("footer");
const contactAlert = document.getElementById("contact-alert");
const closeAlertButton = document.querySelector(".close-alert");

// Fonction pour afficher l'alerte
function showAlert() {
  contactAlert.classList.add("show");
}

// Fonction pour masquer l'alerte (utile pour la fermeture manuelle)
function hideAlert() {
  contactAlert.classList.remove("show");
}

// --- NOUVELLE LOGIQUE : Affichage au défilement en bas de page ---

window.addEventListener("scroll", () => {
  // Logique existante pour masquer l'icône de défilement vers le bas
  if (window.scrollY > 0) {
    scrollDown.classList.add("hidden");
  } else {
    scrollDown.classList.remove("hidden");
  }

  // Calcul pour déterminer si l'utilisateur est en bas de page
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // On considère qu'on est en bas si on est à 5 pixels près du bas (tolérance)
  const isAtBottom = scrollPosition + viewportHeight >= documentHeight - 5;

  // Affiche l'alerte si l'utilisateur atteint le bas et qu'elle n'est pas déjà visible
  // et n'a pas été fermée manuellement.
  if (isAtBottom && !contactAlert.classList.contains("show")) {
    showAlert();
  }

  // Si vous souhaitez que l'alerte disparaisse lorsque l'utilisateur remonte
  // la page, vous pouvez décommenter le bloc 'else if' ci-dessous :
  /*
    else if (!isAtBottom && contactAlert.classList.contains("show")) {
        hideAlert();
    }
    */
});

// 3. Gérer la fermeture de l'alerte au clic sur le 'X'
closeAlertButton.addEventListener("click", (e) => {
  e.stopPropagation();
  hideAlert();
});
