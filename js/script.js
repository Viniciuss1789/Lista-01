const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")
const btnEx16 = document.querySelector("#ex16")
const btnEx17 = document.querySelector("#ex17")
const btnEx18 = document.querySelector("#ex18")
const btnEx19 = document.querySelector("#ex19")

function ex01() {
    let nome = prompt("Digite seu Nome : ")
    alert("Seja Bem vindo : " + nome)
}

btnEx01.addEventListener('click', ex01)

function ex02() {
    let numero = parseInt(prompt("Digite um Número : "))
    let numero02 = parseInt(prompt("Digite outro Número : "))
    let soma = numero + numero02
    alert("O Resultado da soma é = " + soma)
}

btnEx02.addEventListener('click', ex02)

function ex03() {
    let numero = parseInt(prompt("Digite um Número : "))
    let numero02 = parseInt(prompt("Digite outro Número : "))
    let subtracao = numero - numero02
    alert("O Resultado da Subtração é = " + subtracao)
}

btnEx03.addEventListener('click', ex03)

function ex04() {
    let numero = parseInt(prompt("Digite um Número : "))
    let numero02 = parseInt(prompt("Digite outro Número : "))
    let multiplicacao = numero * numero02
    alert("O Resultadado da Multiplicação é : " + multiplicacao)

}

btnEx04.addEventListener('click', ex04)

function ex05() {
    let numero = parseFloat(prompt("Digite um Número : "))
    let numero02 = parseFloat(prompt("Digite outro Número : "))
    let divisao = numero / numero02
    alert("O Resultado da Divisão é : " + divisao)
}

btnEx05.addEventListener('click', ex05)

function ex06() {
    let numero = parseInt(prompt("Digite um Número : "))
    numero++;
    let numero02 = numero
    alert("Resultado " + numero02)
}

btnEx06.addEventListener('click', ex06)

function ex07() {
    let numero = parseInt(prompt("Digite um Número : "))
    numero--;
    let numero02 = numero
    alert("Resultado " + numero02)
}

btnEx07.addEventListener('click', ex07)

function ex08() {
    let base = parseInt(prompt("Digite a Base do Retangulo : "))
    let altura = parseInt(prompt("Digite a Altura do Retangulo : "))
    let area = base * altura
    alert("A Area de um Retangulo é : " + area)
}

btnEx08.addEventListener('click', ex08)

function ex09() {
    let base = parseInt(prompt("Digite a Base do Triangulo : "))
    let altura = parseInt(prompt("Digite a Altura do Triangulo : "))
    let area = base * altura / 2
    alert("A Area do Triangulo é : " + area)
}

btnEx09.addEventListener('click', ex09)

function ex10() {
    let lado = parseInt(prompt("Digite o Lado do Quadrado : "))
    let area = lado * lado
    alert("A Area do Quadrado é : " + area)
}

btnEx10.addEventListener('click', ex10)

function ex11() {
}

btnEx11.addEventListener('click', ex11)