let fullajtarGame;
let fullajtarBoard;

function demoFullajtarGame(){
    if (document.getElementById('backgroundfullajtar').style.display !== 'none'){
        document.getElementById('fullajtardemobtn').classList.add('fullajtaractivebutton');
        document.getElementById('backgroundfullajtar').style.display = 'none';
        let gif = document.createElement('img');
        gif.src = 'df-game/img/fullajtardemo.gif';
        gif.id = 'fullajtargif';
        console.log(gif)
        document.getElementById('fullajtarboard').appendChild(gif);
    }
    else{
        document.getElementById('fullajtardemobtn').classList.remove('fullajtaractivebutton');
        document.getElementById('backgroundfullajtar').style.display = 'block';
        document.getElementById('fullajtargif').remove();
    }

}

function newFullajtarGame(){
    //const element = document.getElementById('body');
    //while (element.hasChildNodes()){
   //     console.log('child')
   //     element.lastChild.remove();
   // }

    if (endGame()){

        interval =  setInterval( timer, 1000);

    }
    document.getElementById("seconds").innerHTML='00';
    document.getElementById("minutes").innerHTML='00';
    sec = 0;

    for (let i=1; i<10; i++){
        const startingContainerId = 'imgcontainer'+ i;

        const imgId = 'pikachupart' + i;
        const elememnt = document.getElementById(imgId);
        document.getElementById(startingContainerId).appendChild(elememnt);
    }
    document.getElementById('win').textContent = 'Skladaj!';


}

function endGame(){
    let containers = document.querySelectorAll('div.imgcontainer');
    let returnValue = true;
    containers.forEach(element =>{
        let el = element.firstChild;
        if (el) {
            let string = el.id.replace('part', '');     //replace('part','');
            if (string !== element.id){
                returnValue = false;
            }
        }
        else returnValue =  false;
    })

    if (returnValue){
        clearInterval(interval);
        document.getElementById('win').textContent = 'Vyhral si!';
    }
    return returnValue;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function updateImgContainerEmptyAttribute(id){
    let imgContainer = document.getElementById(id);
    if (imgContainer.hasChildNodes() || imgContainer.className === 'imgpart'){
        return;
    }
    if (imgContainer.className !== 'imgpart'){
        imgContainer.setAttribute('empty', 'true');
    }
}



function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    updateImgContainerEmptyAttribute(ev.target.id);
    if (ev.target.getAttribute('empty') === 'false'){
    }
    else if(ev.target.className !== 'imgpart'){
        ev.target.setAttribute('empty', 'false');
        ev.target.appendChild(document.getElementById(data));
    }
    endGame();
}

var sec = 0; // prevzate z : https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
function pad ( val ) { return val > 9 ? val : "0" + val; };
function timer(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}
let interval =  setInterval( timer, 1000);