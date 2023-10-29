const inputDate =   window.document.getElementById('inputDate')
const clock =       window.document.querySelector('#clock')
const inputFuture = window.document.querySelector('#inputFuture')


//                      Animation clock
function stopClock(clock){
    if (clock.classList.contains("fa-beat") || clock.classList.contains("fa-spin")){
        clock.classList.remove("fa-beat")
        clock.classList.remove("fa-spin")
    }else{
        clock.classList.add("fa-beat")
    }
}

function datePastON(){
    clock.classList.remove("fa-beat")
    clock.classList.add("fa-spin")
    clock.classList.add("fa-spin-reverse")
}

function datePastOFF(){
    clock.classList.remove("fa-spin")
    clock.classList.remove("fa-spin-reverse")
    clock.classList.add("fa-beat")
}

function dateFowardON(){
    clock.classList.remove("fa-beat")
    clock.classList.remove("fa-spin-reverse")
    clock.classList.add("fa-spin")
}

function dateFowardOFF(){
    clock.classList.remove("fa-spin")
    clock.classList.add("fa-beat")
}

//                     Dates
function today(){
    inputFuture.value = getDate
}

function countDays(){
    const data1 = new Date(window.document.querySelector('#inputPast').value)
    const data2 = new Date(window.document.querySelector('#inputFuture').value)
    const seconds = data2 - data1
    const seconds1Day = 24 * 60 * 60 * 1000
    const days = Math.floor(seconds / seconds1Day)
    const result = window.document.querySelector('#result')
    result.classList.remove('hidden')
    const linkedin = window.document.querySelector('#linkedin')
    linkedin.classList.remove('hidden')

    if(days < 2 && days >= 0){
        result.textContent = `Diferença de ${days} dia.`
    }else if(days/365 === 1){
        result.textContent = `Diferença de ${days} dias, ou ${Math.floor((days/365))} ano.`     
    }else{
        result.textContent = `Diferença de ${days} dias, ou ${Math.floor(days/365)} anos.` 
    }   
}

function examples(date , exampleNumber ){
    if(exampleNumber === 9){
    const result = window.document.querySelector('#result')
    result.classList.remove('hidden')
    const linkedin = window.document.querySelector('#linkedin')
    linkedin.classList.remove('hidden')
    result.textContent = 'Diferença de 4.748.231.051.994 dias ou 13,5 Bilhões de anos'
    }
    window.document.querySelector('#inputPast').value = date
    console.log(inputPast.value)
    console.log(date)
    console.log(exampleNumber)

}