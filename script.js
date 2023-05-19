const pedidos = [];

function cheeseBurger() {
  const content = document.getElementById("content-principal");
  const name = document.getElementById("CheeseBurger").innerText;
  const qtd = document.querySelector('input[name="qtdCheeseBurger"]').value;
  alert(
    "Pedido Realizado!" + "\nNome do lanche: " + name + "\nQuantidade: " + qtd
  );
}
