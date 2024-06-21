function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/imgdark.png")
  }
}

//pegar a tag img

//se tiver light mode, adicionar a imagem light
//substituir a imagem
//se tiver sem light mode,a manter a imagem normal

/*
  if(body.classList.contains('light')){
    hmtl.classList.remove('light')
    } else {
    hmtl.classList.add('light')
    } */
