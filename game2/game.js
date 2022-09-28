function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

const gameTemplate = document.createElement('template');
gameTemplate.innerHTML = `
  
<div id="frame"></div>

<div class="catTarget" id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div class="catTarget" id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img class="cats" id="drag1" alt="fragmented cat" src="img/cats-for-project-11.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag2" alt="fragmented cat" src="img/cats-for-project-12.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag3" alt="fragmented cat" src="img/cats-for-project-13.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag4" alt="fragmented cat" src="img/cats-for-project-14.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag5" alt="fragmented cat" src="img/cats-for-project-15.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag6" alt="fragmented cat" src="img/cats-for-project-16.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag7" alt="fragmented cat" src="img/cats-for-project-17.png" draggable="true" ondragstart="drag(event)" >
<img class="cats" id="drag8" alt="fragmented cat" src="img/cats-for-project-18.png" draggable="true" ondragstart="drag(event)" >
`;

function displayDemo(){
    if(document.getElementById("cats").style.display==="block"){
        document.getElementById("cats").style.display="none";
    }
    else
document.getElementById("cats").style.display="block";
}
function init(){
    var div = document.getElementById("innerGame");
    div.innerHTML=''

    div.appendChild(gameTemplate.content.cloneNode(true));
}
var Stopwatch = function(elem, options) {

    var timer       = createTimer(),
        resetButton = createButton("reset", reset),
        offset,
        clock,
        interval;

    // default options
    options = options || {};
    options.delay = options.delay || 1;

    // append elements
    elem.appendChild(timer);
    elem.appendChild(resetButton);

    // initialize
    reset();

    // private functions
    function createTimer() {
        return document.createElement("span");
    }

    function createButton(action, handler) {
        var a = document.createElement("a");
        a.href = "#" + action;
        a.innerHTML = action;
        a.addEventListener("click", function(event) {
            handler();
            event.preventDefault();
        });
        return a;
    }

    function start() {
        if (!interval) {
            offset   = Date.now();
            interval = setInterval(update, options.delay);
        }
    }


    function reset() {
        start()
        clock = 0;
        render();
        init();
    }

    function update() {
        clock += delta();
        render();
    }

    function render() {
        timer.innerHTML = clock/1000;
    }

    function delta() {
        var now = Date.now(),
            d   = now - offset;

        offset = now;
        return d;
    }

    // public API
    this.start  = start;
    this.reset  = reset;
};
var elems = document.getElementsByClassName("stopwatch");

for (var i=0, len=elems.length; i<len; i++) {
    new Stopwatch(elems[i]);
}