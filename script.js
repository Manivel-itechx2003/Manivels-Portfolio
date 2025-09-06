
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const menuIcon = document.getElementById("menuIcon").querySelector("i");

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  toggleBtn.textContent = body.classList.contains("light-mode") ? "☀️ Light" : "🌙 Dark";

  // Change menu icon color dynamically
  if (body.classList.contains("light-mode")) {
    menuIcon.style.color = "#121212"; // dark icon for light mode
  } else {
    menuIcon.style.color = "#fff"; // white icon for dark mode
  }
});

// Auto-close navbar on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      $('.navbar-collapse').collapse('hide'); // Bootstrap collapse
    }
  });
});
