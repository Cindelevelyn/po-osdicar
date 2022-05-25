function Enviar() {

    var cadastro = document.getElementById("modelo_carro");

    if (cadastro.value != "") {
        alert('Obrigado sr(a) ' + cadastro.value + ' os seus dados foram encaminhados com sucesso');
    }

}