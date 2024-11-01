function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem e o alt
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem Light e atualizar o alt
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo claro")
  } else {
    // Se tiver sem light mode, manter a imagem normal e o alt padrão
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo escuro")
  }
}
