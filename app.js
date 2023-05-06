const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const playButton = document.querySelector('.reset-button')

play.addEventListener('click', start)
pause.addEventListener('click', pause)
reset.addEventListener('click', reset)

let startTime
let elapsedTime = 0
let timeInterval

function timeToString(time){
    let diffInHrs = time /3600000
    let hh = Math.floor(diffInHrs)
    
    let diffInMin = (diffInHrs - hh)*60
    let mm = Math.floor(diffInMin)
    
    let diffInSec= (diffInMin - mm)*60
    let mm = Math.floor(diffInMin)
    
     let diffInMs = (diffInSec - ss)*60
    let mm = Math.floor(diffInMin)
    
    let formattedMM = mm.toString().padStart(2, '0')
    let formattedSS = ss.toString().padStart(2, '0')
    let formattedMS = ms.toString().padStart(2, '0')
    

    return '${formattedMM}: ${formattedSS}: ${formattedMS}'
}

function showButton(buttonKey){
    const buttonShow = buttonKey== 'play'? playButton : pauseButton
    const buttonHide = buttonKey== 'pause'? pauseButton : playButton
    
    buttonShow.style.display = 'block'
    buttonHide.style.display = 'none'
}

function print(text){
 document.getElementById('display').innerHTML = text
}

function start(){
startTime = Date.now() - elapsedTime
timeInterval = setInterval(function printTime(){
    elapsedTime = Date.now() - startTime
    print(timeToString(elapsedTime))
}, 10) 
showButton('pause')

}

function pause(){
    clearInterval(timeInterval)
    showButton('play')
}

function reset(){
    clearInterval(timeInterval)
    print('00:00:00')
    elapsedTime = 0
    showButton('play')
}