const atletasImg = document.querySelectorAll('.lutas-imagens img')
const modalImg = document.querySelector('#modal')
const btnFechar = document.querySelector('.fechar')
const imgAmpliada = document.querySelector('.imagem-ampliada')

atletasImg.forEach(imagem => {
  imagem.addEventListener('click', abrirImagemModal)
})

function abrirImagemModal(e) {
  modalImg.style.display = "block"
  imgAmpliada.src = e.target.src
}

btnFechar.addEventListener('click', fecharModal)
modalImg.addEventListener('click', fecharModal)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape')
    fecharModal();
  }
)

function fecharModal() {
  modalImg.style.display = "none"
}