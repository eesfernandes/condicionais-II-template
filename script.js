console.log(`--- SEJA BEM VINDO AO LABANK! ---`)

// let idadeDependente = parseInt(prompt(`Digite a idade do seu dependente: `))

let msgResp

/*
// Prática guiada I
// Condicional com if aninhado
const ifAninhado = () => {
    if(idadeDependente > 12){
        if(idadeDependente < 18){
            msgResp = `Idade: ${idadeDependente} anos - Seu dependente já pode ter um cartão de crédito vinculado ao seu.`
            console.log(msgResp)
        }else{
        msgResp = `Idade: ${idadeDependente} anos - Consulte outras opções do Labank`
        console.log(msgResp)
        }     
    }else{
        msgResp = `Idade: ${idadeDependente} anos - Consulte outras opções do Labank`
        console.log(msgResp)
    }
}
ifAninhado()

// Condicional com operador lógico
const opLogico = () => {
    if(idadeDependente > 12 && idadeDependente < 18){
        msgResp = `Idade: ${idadeDependente} anos - Seu dependente já pode ter um cartão de crédito vinculado ao seu.`
        console.log(msgResp)
    }else{
        msgResp = `Idade: ${idadeDependente} anos - Consulte outras opções do Labank`
        console.log(msgResp)
    }
}
opLogico()


// Prática guiada II
// Condicional com ternário
const ternario = () => {
    idadeDependente === 13 ? 
    console.log(`A idade é 13, já pode ter cartão.`) : console.log(`Verifique as opções do Labank.`)
}
ternario()


// Prática guida III
// Condicional com switch case
const tipoDeCartao = Number(prompt(`Digite o número correspondente o tipo de cartão: `))

switch (tipoDeCartao) {
    case 1:
        console.log(`Cartão de crédito fácil`)
        break;
    case 2:
        console.log(`Cartão de crédito black`)
        break;
    case 3:
        console.log(`Cartão de crédito Platium`)
        break;
    case 4:
        console.log(`Cartão de crédito Master Gold`)
        break;
    default:
        console.log(`Escolha uma das opções: 1, 2, 3 ou 4`)
        break;
}

*/

const num = Number(prompt(`Digite um número: `))

/*
if(num % 2 === 0){
    if(num % 3 === 0){
        console.log(`Número é divisivel por 2 e 3`)
    }else{
        console.log(`Número não é divisivel por 2 e 3`)
    }
}else{
    console.log(`Número não é divisivel por 2 e 3`)
}
*/

if(num % 2 === 0 && num % 3 === 0){
    console.log(`Número é divisivel por 2 e 3`)
    num === 30 ?
    console.log(`Ufa, acertei!`) : console.log(`Não foi dessa vez!`)
}else{
    console.log(`Número não é divisivel por 2 e 3`)
}
