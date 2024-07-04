function p(){
    var n = prompt('Qual o nome do Jogador?')
    if(n.length == 0){
      var alt = document.getElementById('alt')
      var alt2 = alt.innerText='Dados inválidos, recarregue a página e tente novamente.';
      document.body.style.background = "black";
    } else{
        var a = alert(`Bem-vindo(a) ${n}`)
    }
}