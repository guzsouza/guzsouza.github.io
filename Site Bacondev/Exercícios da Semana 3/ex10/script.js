function carregar(){
    var mensage = window.document.getElementById('msg')
    var image = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours(), minutes = data.getMinutes()
    mensage.innerHTML = `Agora são ${hora} horas e ${minutes} minutos.`
    
    
    if(hora >= 0 && hora < 12){
        image.src = 'Images/morning.png'
    }else if(hora >= 12 && hora <= 18){
        image.src = 'Images/afternoon.png'
        document.body.style.backgroundColor = "#F2BC74"
    }else{
        image.src = 'Images/night.png'
        document.body.style.backgroundColor = "#482E4C"
    }
}