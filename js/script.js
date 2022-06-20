document.getElementById("btn_cadastro").addEventListener("click", validar, false);

function validar() {
  var $divMensagemModelo = document.getElementById("divMensagemModelo");
  var $divMensagemMarca = document.getElementById("divMensagemMarca");
  var $divMensagemAno = document.getElementById("divMensagemAno");
  var $divMensagemPreco = document.getElementById("divMensagemPreco");
  var $divMensagemFoto = document.getElementById("divMensagemFoto");
  var $divMensagemCor = document.getElementById("divMensagemCor");
  var $divMensagemDesc = document.getElementById("divMensagemDesc");
  var $Modelo = document.getElementById("modelo_carro");
  var $Marca = document.getElementById("marca_escolhida");
  var $Ano = document.getElementById("ano_escolhido");
  var $Preco = document.getElementById("preco");
  var $Foto = document.getElementById("foto");
  var $Cor = document.getElementById("cor_escolhida");
  var $Desc = document.getElementById("descricao");

  if ($Modelo.value.length < 2)
    $divMensagemModelo.innerHTML = "O modelo deve ser informado";
  else $divMensagemModelo.innerHTML = "";

  if ($Marca.value == "-- Marca")
    $divMensagemMarca.innerHTML = "A marca deve ser informado";
  else $divMensagemMarca.innerHTML = "";

  if ($Ano.value == "-- Ano")
    $divMensagemAno.innerHTML = "O ano deve ser informado";
  else $divMensagemAno.innerHTML = "";

  if ($Preco.value == 'R$ 0,00' || $Preco.value == 0)
    $divMensagemPreco.innerHTML = "O preço deve ser informado";
  else $divMensagemPreco.innerHTML = "";
  
  if ($Foto.value.length == 0)
    $divMensagemFoto.innerHTML = "A foto deve ser informada";
  else $divMensagemFoto.innerHTML = "";

  if ($Cor.value == "-- Cor")
    $divMensagemCor.innerHTML = "A cor deve ser informada";
  else $divMensagemCor.innerHTML = "";

  if ($Desc.value.length < 20)
    $divMensagemDesc.innerHTML = "Descrição muito pequena";
  else $divMensagemDesc.innerHTML = "";

  if($divMensagemModelo.innerHTML == "" && $divMensagemMarca.innerHTML == "" && $divMensagemAno.innerHTML == "" && $divMensagemPreco.innerHTML == "" && $divMensagemFoto.innerHTML == "" && $divMensagemCor.innerHTML == "" && $divMensagemDesc.innerHTML == "")
  {
    alert("Cadastro realizado!");
  }
}

