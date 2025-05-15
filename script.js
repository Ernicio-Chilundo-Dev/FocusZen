let tempo = 25 * 60; // 25 minutos
let intervalo = null;
let ativo = false;

function atualizarDisplay(){
    const minutos = Math.floor(tempo/60).toString().padStart(2, '0');
    const segundos = Math.floor(tempo%60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${minutos}:${segundos}`;
}

function iniciar(){
    if(!ativo){
        ativo = true;
        intervalo = setInterval(()=>{
            if(tempo > 0 ){
                tempo--;
                atualizarDisplay();
            }else{
                clearInterval(intervalo);
                alert("Tempo de foco concluido");
                ativo = false;
            }
        },1000);
    }
}

function pausar(){
    clearInterval(intervalo);
    ativo = false;
}

function resetar(){
    clearInterval(intervalo);
    tempo = 25 * 60;
    ativo = false;
    atualizarDisplay();
}

atualizarDisplay()