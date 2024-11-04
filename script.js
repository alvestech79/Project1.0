function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem e o alt
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo claro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo escuro")
  }

  // Mudar as cores dos ícones e texto
  const textColor = html.classList.contains("light") ? "black" : "white"
  document.body.style.color = textColor
  const icons = document.querySelectorAll("#social-links ion-icon")
  icons.forEach((icon) => {
    icon.style.color = textColor
  })
}
