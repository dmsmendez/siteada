//se os campos de email estiverem preenchidos, envie os dados.
// se não, vamos pedir para preencher
// operador && seria o e, verificando se as condições foram atendidas
//acessar valor usamos .value
//string - todo texto está em  "aspas"
// igual == diferente!=
//alert("texto") - que se deu certo or not
// eventlistener - onde, qual e quando

document.getElementByID("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario () {
  if (document.getElementByID("name").value != "" && document.getElementByID("email").value != "" && document.getElementByID("telefone").falue != ){
  alert("Prontinho! Você receberá as novidades por e-mail.")
}else{
  alert("Por favor, preencha todos os campos")
}
}