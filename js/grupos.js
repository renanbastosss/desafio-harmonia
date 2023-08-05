const atletasImg = document.querySelectorAll('.grupos-imagens img')
const modalImg = document.querySelector('#modal')
const btnFechar = document.querySelector('.fechar')
const imgAmpliada = document.querySelector('.imagem-ampliada')

const nomeAtletaModal = document.querySelector('.atleta-nome')
const faixaAtletaModal = document.querySelector('.atleta-faixa')
const idadeAtletaModal = document.querySelector('.atleta-idade')
const pesoAtletaModal = document.querySelector('.atleta-peso')

atletasImg.forEach(imagem => {
  imagem.addEventListener('click', abrirImagemModal)
})

function abrirImagemModal(e) {
  modalImg.style.display = "block"
  imgAmpliada.src = e.target.src

  nomeAtletaModal.innerHTML = e.target.dataset.nome
  faixaAtletaModal.innerHTML = "FAIXA " + e.target.dataset.faixa
  idadeAtletaModal.innerHTML = e.target.dataset.idade + " ANOS"
  pesoAtletaModal.innerHTML = e.target.dataset.peso + " KG"
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