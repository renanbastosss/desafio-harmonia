const dadosClassificacao = [
  {
    nome: 'Ana Clara',
    pontos: 3,
    lutas: 1,
    vitorias: 1,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Alessandro Matheus',
    pontos: 6,
    lutas: 2,
    vitorias: 2,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Brenno Queiroz',
    pontos: 5.5,
    lutas: 3,
    vitorias: 2,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Clysmman Tallys',
    pontos: 4,
    lutas: 2,
    vitorias: 1,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Ednaldo Gomes',
    pontos: 5,
    lutas: 2,
    vitorias: 2,
    finalizacoes: 1,
    wo: 0,
  },
  {
    nome: 'Felix de Moura',
    pontos: 2,
    lutas: 2,
    vitorias: 0,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Inacio Salvador',
    pontos: 1,
    lutas: 1,
    vitorias: 0,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Italo Camilo',
    pontos: 2.5,
    lutas: 2,
    vitorias: 1,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Italo Gomes',
    pontos: -4,
    lutas: 1,
    vitorias: 0,
    finalizacoes: 0,
    wo: -1,
  },
  {
    nome: 'Jhonatas David',
    pontos: 2,
    lutas: 2,
    vitorias: 0,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Juan Lima',
    pontos: 5,
    lutas: 3,
    vitorias: 1,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Luana Ribeiro',
    pontos: 1,
    lutas: 1,
    vitorias: 0,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Lucas Alvez',
    pontos: 2,
    lutas: 2,
    vitorias: 0,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Mateus Amorim',
    pontos: 8,
    lutas: 4,
    vitorias: 2,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Paula Jhatiacy',
    pontos: 2,
    lutas: 2,
    vitorias: 0,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Rafael Cabral',
    pontos: 13.5,
    lutas: 4,
    vitorias: 3,
    finalizacoes: 2,
    wo: 0,
  },
  {
    nome: 'Ricardinho',
    pontos: 4,
    lutas: 2,
    vitorias: 1,
    finalizacoes: 0,
    wo: 1,
  },
  {
    nome: 'Tiago Alves',
    pontos: 3,
    lutas: 1,
    vitorias: 1,
    finalizacoes: 0,
    wo: 0,
  },
  {
    nome: 'Vinicius Reis',
    pontos: 4,
    lutas: 1,
    vitorias: 1,
    finalizacoes: 1,
    wo: 0,
  },
  {
    nome: 'Vinicius Lima',
    pontos: 17,
    lutas: 5,
    vitorias: 4,
    finalizacoes: 3,
    wo: 0,
  },

]

function ordenarTabela () {
  dadosClassificacao.sort((a, b) => a.wo - b.wo)
  dadosClassificacao.sort((a, b) => b.finalizacoes - a.finalizacoes)
  dadosClassificacao.sort((a, b) => b.vitorias - a.vitorias)
  dadosClassificacao.sort((a, b) => a.lutas - b.lutas)
  dadosClassificacao.sort((a, b) => b.pontos - a.pontos)
}

function criarTabelaClassificacao() {
  const tabela = document.getElementById('tabela-classificacao');

  ordenarTabela()

  for (let i = 0; i < dadosClassificacao.length; i++) {
      const dado = dadosClassificacao[i]

      const row = tabela.insertRow();

      const posicaoCell = row.insertCell(0);
      posicaoCell.textContent = i+1;

      const nomeCell = row.insertCell(1);
      nomeCell.textContent = dado.nome;
      nomeCell.classList.add("table-atleta")

      const pontosCell = row.insertCell(2);
      pontosCell.textContent = dado.pontos;

      const lutasCell = row.insertCell(3);
      lutasCell.textContent = dado.lutas;

      const vitoriasCell = row.insertCell(4);
      vitoriasCell.textContent = dado.vitorias;

      const finalizacoesCell = row.insertCell(5);
      finalizacoesCell.textContent = dado.finalizacoes;

      const woCell = row.insertCell(6);
      woCell.textContent = dado.wo;
  }
}

window.onload = function () {
  criarTabelaClassificacao();
};