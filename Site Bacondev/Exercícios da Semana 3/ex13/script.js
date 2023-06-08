function tabuada(){
    if(document.querySelector('input#number').value.length == 0){
        window.alert('Por favor, insira um número.')
    }else{
        document.querySelector('select#seltab').innerHTML = ``
        var num1 = Number(document.querySelector('input#number').value)
        for(let c = 1;c <= 10;c++){
            let mult = document.createElement('option')
            mult.text = `${num1} * ${c} = ${num1*c}`
            mult.value = `tab${c}`
            document.querySelector('select#seltab').appendChild(mult)
        }
    }
}