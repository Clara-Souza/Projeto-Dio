let nomeDoHeroi = document.querySelector(".nome").value;

let ranking = document.querySelector(".message");

ranking.innerHTML = "Digite seu XP para saber sua liga."

function ButtonClick(){
    let quantidadeDeXp = document.querySelector(".quantidade").value;
    let nomeHeroi = document.querySelector(".nome").value;

    if (nomeHeroi != "") {
        switch (true){
            case quantidadeDeXp > 1 && quantidadeDeXp <=1000: 
                ranking.innerHTML = `${nomeHeroi}, você está na liga Ferro.`
                break
            case quantidadeDeXp > 1001 && quantidadeDeXp <=2000:
                ranking.innerHTML = `${nomeHeroi}, você está na liga Bronze.`
                break
            case quantidadeDeXp > 2001 && quantidadeDeXp <=3000:
                ranking.innerHTML = `${nomeHeroi},você está na liga Prata.`
                break;
            case quantidadeDeXp > 3001 && quantidadeDeXp <=4000:
                ranking.innerHTML =  `${nomeHeroi},você está na liga Ouro.`
                break;
            case quantidadeDeXp > 4001 && quantidadeDeXp <=5000:
                ranking.innerHTML = `${nomeHeroi}, você está na liga Diamante.`
                break;
            case quantidadeDeXp > 5001:
                ranking.innerHTML = `${nomeHeroi}, você está na liga Platina.`
                break;    
            
            default: 
            ranking.innerHTML = "Digite seu XP para saber sua liga."
        }
    } else {
        alert("Digite o nome do herói.")
    }
}
