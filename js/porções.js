const itemsPorcao = [
  {
    id: 0,
    nome: "Batata Frita",
    img: "assets/8.png",
    quantidade: 0,
    valor: 12.5,
  },
  {
    id: 1,
    nome: "Onion Rings",
    img: "assets/onion.png",
    quantidade: 0,
    valor: 10.0,
  },
  {
    id: 2,
    nome: "Nuggets",
    img: "assets/nuggets.png",
    quantidade: 0,
    valor: 15.5,
  },
  {
    id: 3,
    nome: "Frango a Passarinho",
    img: "assets/frango-passarinho.png",
    quantidade: 0,
    valor: 18.0,
  },
  {
    id: 4,
    nome: "Coxinha",
    img: "assets/coxinha.png",
    quantidade: 0,
    valor: 8.5,
  },
];

// Criar itens na página de porções
const porcoes = () => {
  const containerProdutos = document.getElementById("produtosPorcao");
  itemsPorcao.map((val) => {
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
        <button class="btn-porcoes"  key=` +
      val.id +
      `>ADD</button>
      </div>
    </div>
    <br />
    `;
  });
};

porcoes();

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
  const links = document.getElementsByClassName("btn-porcoes");
  // Junto com a iteração, é feita a soma da quantidade da porção ao ser clicado no botão
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      itemsPorcao[key].quantidade++;
      // Condicional para pegar o valor da porção em que o botão foi clicado,
      // adicionar ao array global valoresList e fazer a soma dos elementos.
      // Após a soma, o valor é adicionado em um Li, que é zerado toda vez que a função é chamada,
      // e é atribuído o novo valor da soma.
      if (itemsPorcao[key].quantidade > 0) {
        const valor = itemsPorcao[key].valor;
        valoresList.push(valor);
        const somaValores = valoresList.reduce(function (acumulador, value) {
          return acumulador + value;
        }, 0);
        console.log(valoresList);

        newValor.className = "total";
        newValor.innerHTML = "R$" + somaValores.toFixed(2);
      }

      console.log(itemsPorcao);
    });
  }
}

addTotal();
