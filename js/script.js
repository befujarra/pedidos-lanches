const itemsLanche = [
  {
    id: 0,
    nome: "CheeseBurger",
    img: "assets/2.png",
    quantidade: 0,
    valor: 16.5,
  },
  {
    id: 1,
    nome: "X-Salada",
    img: "assets/1.png",
    quantidade: 0,
    valor: 18.0,
  },
  {
    id: 2,
    nome: "X-Bacon",
    img: "assets/3.png",
    quantidade: 0,
    valor: 17.9,
  },
  {
    id: 3,
    nome: "Big X-Bacon",
    img: "assets/4.png",
    quantidade: 0,
    valor: 22.0,
  },
  {
    id: 4,
    nome: "X-Egg",
    img: "assets/5.png",
    quantidade: 0,
    valor: 17.5,
  },
];

//criar items na pagina de lanche
const lanches = () => {
  const containerProdutos = document.getElementById("produtosLanche");
  itemsLanche.map((val) => {
    containerProdutos.innerHTML +=
      `
    
      <div class="card" id="CheeseBurger">
      <div class="headCard">
        <img src="` +
      val.img +
      `" alt="" />
        <div class="card-titles">
          <h3 name="CheeseBurger">` +
      val.nome +
      `</h3>
          <p>
            Pão fofinho, hambúrguer de carne bovina e queijo por todos os
            lados.
          </p>
        </div>
      </div>
      <div class="card-inputs">
        <div>
        
          <p>R$` +
      val.valor.toFixed(2) +
      `</p>
        </div>
        <button class="btn-lanches"  key=` +
      val.id +
      `>ADD</button>
      </div>
    </div>
    <br />
    `;
  });
};
lanches();
//mapear os items
const valoresList = [];

function addTotal() {
  //criação da lista onde os valores serão colcoados no html
  const ul = document.getElementById("pedidos");
  const newLi = document.createElement("li");
  newLi.className = "total";
  newLi.innerHTML = "Total: ";
  const newValor = document.createElement("li");
  newValor.innerHTML = "";
  ul.append(newLi, newValor);
  //iteração dos botões com evento para a pagina escutar qual deles será clicado
  const links = document.getElementsByClassName("btn-lanches");
  //junto com a iteração é feito a soma da quantidade do produto ao ser clicado no botão
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      itemsLanche[key].quantidade++;
      //condicional para pegar o valor do lanche em que o botao foi clicado,
      //mandar para o array global valoresList e fazer a somatoria dos elementos,
      // apos a soma, o valor é adicionado um Li que é zerado toda vez que a função for chamada
      //e atribuido o novo valor da soma
      if (itemsLanche[key].quantidade > 0) {
        const valor = itemsLanche[key].valor;
        valoresList.push(valor);
        const somaValores = valoresList.reduce(function (acumulador, value) {
          return acumulador + value;
        }, 0);
        console.log(valoresList);

        newValor.className = "total";
        newValor.innerHTML = "R$" + somaValores.toFixed(2);
      }

      console.log(itemsLanche);
    });
  }
}
addTotal();
