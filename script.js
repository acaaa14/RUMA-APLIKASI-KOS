const popup = document.querySelector("[data-popup]");
const closeButtons = document.querySelectorAll("[data-popup-close]");

function closePopup() {
  if (!popup) return;
  popup.classList.remove("is-visible");
}

if (popup) {
  window.setTimeout(() => {
    popup.classList.add("is-visible");
  }, 500);

  closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup);
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
  });
}
