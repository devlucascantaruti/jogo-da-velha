const darkModeToggle = document.getElementById("dark-mode-toggle");

// Adiciona o evento de clique no botão
darkModeToggle.addEventListener("click", () => {
  // Alterna a classe 'dark-mode' no body
  document.body.classList.toggle("dark-mode");

  // Muda o texto do botão dependendo do estado do modo escuro
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Dark Mode On";
  } else {
    darkModeToggle.textContent = "Dark Mode Off";
  }
});