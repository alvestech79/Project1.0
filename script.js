function toggleMode() {
  const html = document.documentElement
  const isLightMode = html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (isLightMode) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo claro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo escuro")
  }

  localStorage.setItem("theme", isLightMode ? "light" : "dark")
}

function applyTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    const html = document.documentElement
    html.classList.add(savedTheme)

    const img = document.querySelector("#profile img")
    if (savedTheme === "light") {
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo claro")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute("alt", "Foto do Mayk Brito sorrindo em modo escuro")
    }
  }
}

document
  .getElementById("dev-btn")
  .addEventListener("click", () => (location.href = "index.html"))
document
  .getElementById("music-btn")
  .addEventListener("click", () => (location.href = "music.html"))

applyTheme()
