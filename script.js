Mensagem = () => {
    alert("Bem Vindo ao Nosso Site")
}

TrocarNome = () =>{ 
    let inputname = document.getElementById("inputname").value;
    let explication = document.getElementsByClassName("explication");
    let ps = window.document.getElementsByTagName("p")[0];
    ps.innerHTML = inputname;
    ps.style.color = "#00F";
    explication.innerHTML.style.color = "#0F0";
}

TrocarCor = () => {
    let explication = document.getElementsByClassName("explication").style.color;
    let ps = window.document.getElementsByTagName("p")[0].style.color;
    ps = "#00F";
    explication = "#0F0";
}

function CaixaAlta(result) {
    let p = document.getElementById("result");
    if (p) {
        p.innerText = p.innerText.toUpperCase();
    }
}
let cor;

TrocarCorBack = () => {
    let backGround = window.document.getElementsByTagName("body")[0];
    if(cor)
    {
        cor = false;
        backGround.style.background = "#FFF";
    }
    else{
        cor = true;
        backGround.style.background = "#000";
    }
}

Selecionar1 = () => {
    // Usando document.querySelector():
    var primeiroElemento = document.querySelector("#text");
    primeiroElemento.style.color = "#F00";
    // Este método retorna o primeiro elemento que corresponde ao seletor CSS especificado.    
}

SelecionarTodos = () => {
    // Usando document.querySelectorAll():
    var todosOsElementos = document.querySelectorAll("#text");
    todosOsElementos.forEach(function(elemento){
        elemento.style.color = "#F00";
    });
    // Este método retorna todos os elementos que correspondem ao seletor CSS especificado.
}

Resetar = () => {
    var todosOsElementos = document.querySelectorAll("#text");
    todosOsElementos.forEach(function(elemento){
        elemento.style.color = "#707070";
    });
}

// Função Nomeada:
function minhaFuncao() {
    alert("Esta é uma função nomeada.");
}

// Função Nomeada com argumento(parametro) e retorno:
function soma(a, b) {
    return a + b;
}

// Função com Construtor:
var minhaFuncaoConstrutora = new Function('a', 'b', 'return a * b');

// Função Literal (variável):
var minhaFuncaoVariavel = function() {
    alert("Esta é uma função literal.");
};

// Função de Flecha (Arrow functions):
var minhaFuncaoFlecha = (a, b) => a / b;

function Escrever(texto, parag) {
    let p = document.getElementById(parag);
    p.innerText = texto;
}

var contador = 1;
function Contador() {
    button = document.getElementById("meuBotao")
    document.getElementById("contador").innerText = contador;
    contador++;
}

function calcularSoma() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = soma(n1, n2);
    document.getElementById("result").innerText = "A soma é: " + resultado;
}

function soma(a, b) {
    return a + b;
}