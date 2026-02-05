(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const burger = document.querySelector(".burger");
  const mobile = document.getElementById("mobileMenu");
  const closeBtn = document.querySelector(".mobile__close");

  function openMenu() {
    mobile.hidden = false;
    burger?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobile.hidden = true;
    burger?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burger?.addEventListener("click", () => {
    if (mobile.hidden) openMenu();
    else closeMenu();
  });

  closeBtn?.addEventListener("click", closeMenu);
  mobile?.addEventListener("click", (e) => {
    if (e.target === mobile) closeMenu();
  });
  mobile?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  function toggleTheme() {
    const h = document.documentElement;
    const cur = h.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    h.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);
  document.getElementById("themeBtnMobile")?.addEventListener("click", toggleTheme);
})();
