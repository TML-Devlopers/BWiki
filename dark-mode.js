const toggleBtn = document.getElementById("dark-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Tercihi kaydet
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("dark-mode", isDark ? "yes" : "no");
});

// Sayfa açıldığında tema hatırlansın
if (localStorage.getItem("dark-mode") === "yes") {
  document.body.classList.add("dark");
}

