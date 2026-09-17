document.querySelectorAll(".header").forEach(header => {
  const lockup = header.querySelector(".institution-lockup");
  if (lockup) {
    lockup.innerHTML = '<img src="assets/uob-logo.jpg" alt="University of Bristol">';
  } else {
    const logo = document.createElement("div");
    logo.className = "institution-lockup";
    logo.innerHTML = '<img src="assets/uob-logo.jpg" alt="University of Bristol">';
    const menu = header.querySelector(".menu");
    header.insertBefore(logo, menu || header.querySelector("nav"));
  }
});

const toggle = document.querySelector(".menu");
const nav = document.querySelector("nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
      toggle.focus();
    }
  });
}
