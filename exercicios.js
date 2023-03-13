// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt(`Insira a altura desejada`))
const largura = Number(prompt(`Insira a largura desejada`))
const area = altura*largura
console.log (area)
}

// EXERCÍCIO 02
  function imprimeIdade(){
    // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Insira o ano atual`))
  const anoNascimento = Number(prompt(`Insira seu ano de nascimento`))
  const minhaIdade = anoAtual - anoNascimento
  console.log(minhaIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const IMC = peso / (altura * altura)
return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const seuNome = prompt(`Qual é seu nome?`)
const suaIdade = Number(prompt(`Qual é sua idade?`))
const seuEmail = prompt(`Qual é seu email?`)
console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corFavoritaUm = prompt(`Qual sua primeira cor favorita?`)
const corFavoritaDois = prompt(`Qual sua segunda cor favorita?`)
const corFavoritaTres = prompt(`Qual sua terceira cor favorita?`)
const tresCores = [corFavoritaUm, corFavoritaDois, corFavoritaTres]
console.log (tresCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const palavra = string.toUpperCase()
return (palavra)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custoTotal = custo / valorIngresso
return custoTotal
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const stringsCheck = string1.length === string2.length
return(stringsCheck)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}
retornaPrimeiroElemento (1,2,3)
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length-1]
}
retornaUltimoElemento (0,1,2,3)
// EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
const primeiraPosicao = array[0]
const ultimaPosicao = array[array.length-1]
array[0] = ultimaPosicao
array[array.length-1] = primeiraPosicao
return array
}

  // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt('Digite o ano atual:'))
const anoNascimento = Number(prompt('Digite o ano de nascimento:'))
const anoEmissaoRg = Number(prompt('Digite o ano de emissao do RG:'))

const idade = anoAtual - anoNascimento 
const tempoEmissaoRg = anoAtual - anoEmissaoRg

const checaIdade = (idade <= 20) && (tempoEmissaoRg >= 5)
const checaIdadeVinteCinquenta = (idade > 20) && (idade <= 50) && (tempoEmissaoRg >= 10)
const checaMaiorDeCinquenta = (idade >= 50) && (tempoEmissaoRg >=15)
console.log(checaIdade || checaIdadeVinteCinquenta || checaMaiorDeCinquenta)
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const anoBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0
return anoBissexto 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const checaMaioridade = prompt('Você tem mais de 18 anos? Responda SIM ou NAO')
const checaEscolaridade = prompt('Você possui ensino médio completo? SIM ou NAO')
const checaDisponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? SIM ou "NAO"')
const respostaDoUsuario = checaMaioridade.toLowerCase() === 'sim' && checaEscolaridade.toLowerCase()=== 'sim' && checaDisponibilidade.toLowerCase() === 'sim' 
console.log(respostaDoUsuario)
}