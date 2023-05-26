const itemsAcompanhamento = [
  {
    id: 0,
    nome: "Açaí",
    img: "assets/7.png",
    quantidade: 0,
    valor: 15.0,
  },
  {
    id: 1,
    nome: "Bolo de Chocolate",
    img: "assets/bolo.png",
    quantidade: 0,
    valor: 9.5,
  },
  {
    id: 2,
    nome: "Pudim",
    img: "assets/pudim.png",
    quantidade: 0,
    valor: 7.0,
  },
  {
    id: 3,
    nome: "Torta de Limão",
    img: "assets/torta.png",
    quantidade: 0,
    valor: 12.0,
  },
  {
    id: 4,
    nome: "Sorvete",
    img: "assets/sorvete.png",
    quantidade: 0,
    valor: 6.5,
  },
];

// Criar itens na página de acompanhamentos
const acompanhamentos = () => {
  const containerProdutos = document.getElementById("produtosAcompanhamento");
  itemsAcompanhamento.map((val) => {
    containerProdutos.innerHTML +=
      `
    
      <div class="card" id="` +
      val.nome.replace(/\s/g, "") +
      `">
      <div class="headCard">
        <img src="` +
      val.img +
      `" alt="" />
        <div class="card-titles">
          <h3 name="` +
      val.nome +
      `">` +
      val.nome +
      `</h3>
          <p>
            Descrição do produto.
          </p>
        </div>
      </div>
      <div class="card-inputs">
        <div>
          <p>R$` +
      val.valor.toFixed(2) +
      `</p>
        </div>
        <button class="btn-acompanhamentos"  key=` +
      val.id +
      `>ADD</button>
     
      </div>
    </div>
    <br />
    `;
  });
};

acompanhamentos();

// Mapear os itens
const valoresList = [];

function addTotal() {
  // Criação da lista onde os valores serão colocados no HTML
  const ul = document.getElementById("pedidos");
  const newLi = document.createElement("li");
  newLi.className = "total";
  newLi.innerHTML = "Total: ";
  const newValor = document.createElement("li");
  newValor.innerHTML = "";
  ul.append(newLi, newValor);
  // Iteração dos botões com evento para a página escutar qual deles será clicado
  const links = document.getElementsByClassName("btn-acompanhamentos");
  // Junto com a iteração, é feita a soma da quantidade do acompanhamento ao ser clicado no botão
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      itemsAcompanhamento[key].quantidade++;
      // Condicional para pegar o valor do acompanhamento em que o botão foi clicado,
      // adicionar ao array global valoresList e fazer a soma dos elementos.
      // Após a soma, o valor é adicionado em um Li, que é zerado toda vez que a função é chamada,
      // e é atribuído o novo valor da soma.
      if (itemsAcompanhamento[key].quantidade > 0) {
        const valor = itemsAcompanhamento[key].valor;
        valoresList.push(valor);
        const somaValores = valoresList.reduce(function (acumulador, value) {
          return acumulador + value;
        }, 0);
        console.log(valoresList);

        newValor.className = "total";
        newValor.innerHTML = "R$" + somaValores.toFixed(2);
      }

      console.log(itemsAcompanhamento);
    });
  }
}

addTotal();
