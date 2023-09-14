//atribui o valor da tag h1 para a variável titulo
let titulo = document.querySelector("h1");
//mostra no console do navegador a variável título
console.log(titulo);
//modifica o valor do título para a frase "Fica grandão birlllll"-
titulo.textContent = "Fica grandão birlllll";

//----------aqui vamos mexer na tabela de imc----

let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente); 

// armazena somente as colunas de peso e altura
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
let tdimc = paciente.querySelector(".info-imc");

//armazena somente os valores de peso e altura//
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

//calcula o imc//
let imc = peso/ (altura*altura);

console.log (imc);

//acessa a coluna imc e altera o valor para o resultado do calculo
let tdImc = paciente.querySelector('.info-imc');
tdImc.textContent = imc;

//validação dos dados
let pesoEhvalido = true;
let alturaEhvalida = true;

if (peso <0 | | peso > 1000){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!"
    pesoEhvalido= false;
}
if(altura < 0 | | altura > 3){
    console.log("Altura Inválida!")
    tdImc.textContent = "Altura Inválida!";
    alturaEhvalida = false;
}

if(pesoEhvalido === true e alturaEhvalida === true){
    //realiza o calculo do imc
    let imc=peso /(altura*altura);
    console.log (imc);
} else {
    tdImc.textContent = "Peso e/ou altura inválidos!";
}
