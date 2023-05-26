const itemsBebida = [
  {
    id: 0,
    nome: "Refrigerante",
    img: "assets/6.png",
    quantidade: 0,
    valor: 5.5,
  },
  {
    id: 1,
    nome: "Suco Natural",
    img: "assets/suco.png",
    quantidade: 0,
    valor: 7.0,
  },
  {
    id: 2,
    nome: "Água Mineral",
    img: "assets/agua.png",
    quantidade: 0,
    valor: 3.5,
  },
  {
    id: 3,
    nome: "Milkshake",
    img: "assets/milks.png",
    quantidade: 0,
    valor: 9.0,
  },
  {
    id: 4,
    nome: "Café",
    img: "assets/cafe.png",
    quantidade: 0,
    valor: 4.5,
  },
];

// Criar itens na página de bebidas
const bebidas = () => {
  const containerProdutos = document.getElementById("produtosBebida");
  itemsBebida.map((val) => {
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
        <button class="btn-bebidas"  key=` +
      val.id +
      `>ADD</button>
      </div>
    </div>
    <br />
    `;
  });
};

bebidas();

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
  const links = document.getElementsByClassName("btn-bebidas");
  // Junto com a iteração, é feita a soma da quantidade da bebida ao ser clicado no botão
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      itemsBebida[key].quantidade++;
      // Condicional para pegar o valor da bebida em que o botão foi clicado,
      // adicionar ao array global valoresList e fazer a soma dos elementos.
      // Após a soma, o valor é adicionado em um Li, que é zerado toda vez que a função é chamada,
      // e é atribuído o novo valor da soma.
      if (itemsBebida[key].quantidade > 0) {
        const valor = itemsBebida[key].valor;
        valoresList.push(valor);
        const somaValores = valoresList.reduce(function (acumulador, value) {
          return acumulador + value;
        }, 0);
        console.log(valoresList);

        newValor.className = "total";
        newValor.innerHTML = "R$" + somaValores.toFixed(2);
      }

      console.log(itemsBebida);
    });
  }
}

addTotal();
