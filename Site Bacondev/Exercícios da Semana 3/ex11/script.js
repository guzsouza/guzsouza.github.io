function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var result = document.querySelector("div#result")
    result.style.textAling = 'center'
    if(fano.value == 0 || fano.value > ano)
        window.alert("[ERRO] Verifique os dados digitados e tente novamente!") 
    else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            result.innerHTML = `Os dados fornecidos indicam a um homem que tem ${idade} anos de idade atualmente.`

            if (idade >=0 && idade < 10){
                img.setAttribute("src", "Images/babyman.png")
            } else if (idade < 21){
                img.setAttribute("src", "Images/boy.png")
            } else if (idade < 50){
                img.setAttribute("src", "Images/man.png")
            } else {
                img.setAttribute("src", "Images/oldman.png")
            }
        }
        else{
            result.innerHTML = `Os dados fornecidos indicam a uma mulher que tem ${idade} anos de idade atualmente.`  

            if (idade >=0 && idade < 10){
                img.setAttribute("src", "Images/babygirl.png")
            } else if (idade < 21){
                img.setAttribute("src", "Images/girl.png")
            } else if (idade < 50){
                img.setAttribute("src", "Images/woman.png")
            } else {
                img.setAttribute("src", "Images/oldwoman.png")
            }
        } 
        img.append("15px")
        result.appendChild(img)
    }
}