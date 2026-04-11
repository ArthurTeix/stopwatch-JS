function getTimeFromSeconds(seconds){
    const date = new Date(seconds * 1000) // multiplicar pois é em milisegundos
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' 
    })
}

const stopwatch = document.querySelector('.stopwatch')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

let seconds = 0
let timer

function startStopwatch(){
    timer = setInterval(function(){
        seconds++
        stopwatch.innerHTML = getTimeFromSeconds(seconds) // cronometro
    }, 1000)
}

start.addEventListener('click', function (event){
    // para impedir mais de um timer ao mesmo tempo
    stopwatch.classList.remove('stoped')
    clearInterval(timer)
    startStopwatch()
})
pause.addEventListener('click', function (event){
    clearInterval(timer) // pausa do contador 'seconds', mas não perde o valor
    stopwatch.classList.add('stoped')
})
reset.addEventListener('click', function (event){
    stopwatch.classList.remove('stoped')
    clearInterval(timer) // pausa o contador
    seconds = 0 // zera o contador, para não voltar de onde resetou
    stopwatch.innerHTML = '00:00:00' // reseta o cronometro
})