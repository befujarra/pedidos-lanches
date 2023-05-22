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

const inicializarLoja = () => {
  const containerProdutos = document.getElementById("produtos");
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
      val.valor +
      `</p>
        </div>
        <a class="btn-lanches" key=` +
      val.id +
      ` >ADD</a>
      </div>
    </div>
    <br />
    `;
  });
};

inicializarLoja();

const links = document.getElementsByClassName("btn-lanches");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    itemsLanche[key].quantidade++;
    console.log(itemsLanche);
  });
}
