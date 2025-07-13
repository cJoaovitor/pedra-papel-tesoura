do{
  let players = prompt("deseja joga sozinho ou como amigo").toLowerCase();
if (players == "sozinho"  ){
  let jogada = prompt("pedra, papel, ou tesura").toLowerCase();
  let jogada2 = sort();
  quem_ganhou(jogada,jogada2);
}
if (players == "como amigo"  ){
  let jogada1 = prompt("primeiro jogador, pedra, papel ou tesura").toLowerCase();
  let jogada2 = prompt("segundo jogador, pedra, papel ou tesura").toLowerCase();
  quem_ganhou(jogada1,jogada2);
}
function sort() {
   let jogadas = ["pedra", "papel", "tesura"];
   let sortmumero = Math.floor(Math.random()*3);
   alert("a maquina escolheu: ");
   alert(sortmumero);
   return jogadas[sortmumero].toLowerCase();
}
function quem_ganhou(primeirajogada,segundajogada){
   this.primeirajogada = primeirajogada;
   this.segundajogada = segundajogada;
   if(primeirajogada == segundajogada){
       alert("empate ")
       }if (this.primeirajogada == "pedra" && this.segundajogada == "tesura" || 
          this.primeirajogada == "tesura" && this.segundajogada == "papel" || 
          this.primeirajogada == "papel" && this.segundajogada == "pedra") {
          alert("primeiro jogador ganhou");
       } else {
           alert("segundo jogador ganhou");
       }
}
}while(confirm("deseja jogar novamente?"));









