var a = prompt("Digite seu nome: ", "Nome");
var b = prompt("Digite seu sobrenome: ", "Sobrenome");
document.write("Bom dia " + a + " " + b);

var i = confirm("Deseja continuar?");
if (i == true) {
    document.write("\nAceitou");
}
else {
    document.write("\nNegou");
}