function Cadastro() {
    var marca = document.getElementById("marca_escolhida");
    var ano = document.getElementById("ano_escolhido");
    var modelo = document.getElementById("modelo_carro");
    var preco = document.getElementById("preco");
    var foto = document.getElementById("foto");
    var cor = document.getElementById("cor_escolhida");

    carro = {marca: marca.value,ano: ano.value,modelo: modelo.value,preco: preco.value,foto: foto.value,cor: cor.value};

    console.log(carro);
}

function ColocaNaLista(carro)
{
    console.log(carro.marca);
    //document.getElementById("marca_do_carro").innerHTML = carro.marca;
}