const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("#visitor-email");
const formMessage = document.querySelector("#form-message");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    });
  });
}

if (contactForm && emailInput && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }
    formMessage.textContent = "That address is valid. This demo does not send or store it; please contact me through LinkedIn.";
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
