let num = document.querySelector("input#fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function verificarTecla(event){
    if(event.keyCode === 13){
        add()
    }
}

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    return false
}

function inLista(n, vet){
    if(vet.indexOf(Number(n)) != -1)
        return true
    return false
}

function add(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicionar valroes antes de finalizar.')
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0

        
        for(pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        let media = (soma/total)
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>A soma de todos os valores cadastrados é : ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores cadastrados é : ${media}.</p>`
    }
}