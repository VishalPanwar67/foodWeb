window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 60) {
    navbar.style.background = "rgba(0,0,0,0.9)";
    navbar.style.padding = "8px 50px";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
    navbar.style.padding = "12px 50px";
  }
});
