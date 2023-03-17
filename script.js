fetch("http://localhost:3000/usuarios")
.then(response => {
    return response.json()
}).then(user => {
    console.log(user);
    document.getElementById('nome1').innerHTML = user[0].nome1 + user[0].imagem;
    document.getElementById('nome2').innerHTML = user[1].nome2 + user[1].imagem;
    document.getElementById('nome3').innerHTML = user[2].nome3 + user[2].imagem;
    document.getElementById('nome1').style.color = "white";
    document.getElementById('nome2').style.color = "white";
    document.getElementById('nome3').style.color = "white";
    document.getElementById('nome1').style.fontSize = "150%";
    document.getElementById('nome2').style.fontSize = "150%";
    document.getElementById('nome3').style.fontSize = "150%";



});

fetch("http://localhost:3000/usuarias")
.then(response => {
    return response.json()
}).then(user => {
    console.log(user);
    document.getElementById('nome4').innerHTML = user[0].nome4+ user[0].imagem;
    document.getElementById('nome5').innerHTML = user[1].nome5 + user[1].imagem;
    document.getElementById('nome6').innerHTML = user[2].nome6 + user[2].imagem;
    document.getElementById('nome4').style.color = "white";
    document.getElementById('nome5').style.color = "white";
    document.getElementById('nome6').style.color = "white";
    document.getElementById('nome4').style.fontSize = "150%";
    document.getElementById('nome5').style.fontSize = "150%";
    document.getElementById('nome6').style.fontSize = "150%";

});

fetch("http://localhost:3000/figurantes")
.then(response => {
    return response.json()
}).then(user => {
    console.log(user);
    document.getElementById('nome7').innerHTML = user[0].nome7+ user[0].imagem;
    document.getElementById('nome8').innerHTML = user[1].nome8 + user[1].imagem;
    document.getElementById('nome9').innerHTML = user[2].nome9 + user[2].imagem;
    document.getElementById('nome7').style.color = "white";
    document.getElementById('nome8').style.color = "white";
    document.getElementById('nome9').style.color = "white";
    document.getElementById('nome7').style.fontSize = "150%";
    document.getElementById('nome8').style.fontSize = "150%";
    document.getElementById('nome9').style.fontSize = "150%";
});

