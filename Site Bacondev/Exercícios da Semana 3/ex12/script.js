function contar(){
    //declaração das variáveis
    let start = document.getElementById("inp1"), end = document.getElementById("inp2"), pass = document.getElementById("inp3"), result = document.getElementById("resultDiv")

    start = Number(start.value)
    end = Number(end.value)
    pass = Number(pass.value)

    result.innerHTML = `Contagem:`

    if(pass > 0){

        //verificação de valores
        if (start > end || (start + pass) > end){
            error()
            return
        }

        for(start; start < end; start += pass){
            result.innerHTML += ` ${start} \u{1F449}`
        }
        result.innerHTML += ` ${start}`
    }
    else {

        //verificação de valores

        if (start < end || (start - pass) < end){
            error()
            return
        }

        for(start; start > end; start += pass){
            result.innerHTML += ` ${start} \u{1F449}`
        }
        result.innerHTML += ` ${start}`
    }
}

function error(){
    window.alert("[ERROR] Valores inválidos, revise os valores digitados e tente novamente!")
}