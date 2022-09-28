var gameFinished = false;
//DRAGnDROP
//inspiration: https://medium.com/@deepakkadarivel/drag-and-drop-dnd-for-mobile-browsers-fc9bcd1ad3c5
window.onload = function() {
    var rybaA = document.getElementById('castE');
    var rybaB = document.getElementById('castA');
    var rybaC = document.getElementById('castD');
    var rybaD = document.getElementById('castG');
    var rybaE = document.getElementById('castF');
    var rybaF = document.getElementById('castB');
    var rybaG = document.getElementById('castH');
    var rybaH = document.getElementById('castC');

    rybaA.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaA.style.left = touchLocation.pageX + 'px';
        rybaA.style.top = touchLocation.pageY + 'px';
      })
    rybaA.addEventListener('touchend', function(e) {
        var x = parseInt(rybaA.style.left);
        var y = parseInt(rybaA.style.top);
        let tail = document.getElementById("tail");
        let rect = tail.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaA.style.left = 0;
          rybaA.style.top = 0;
          tail.appendChild(rybaA);
          checkIfWon();
        }
    })

    rybaB.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaB.style.left = touchLocation.pageX + 'px';
        rybaB.style.top = touchLocation.pageY + 'px';
      })
      rybaB.addEventListener('touchend', function(e) {
        var x = parseInt(rybaB.style.left);
        var y = parseInt(rybaB.style.top);
        let head = document.getElementById("head");
        let rect = head.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaB.style.left = 0;
          rybaB.style.top = 0;
          head.appendChild(rybaB);
          checkIfWon();
        }
    })

    rybaC.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaC.style.left = touchLocation.pageX + 'px';
        rybaC.style.top = touchLocation.pageY + 'px';
      })
    rybaC.addEventListener('touchend', function(e) {
        var x = parseInt(rybaC.style.left);
        var y = parseInt(rybaC.style.top);
        let topLeftFin = document.getElementById("topLeftFin");
        let rect = topLeftFin.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaC.style.left = 0;
          rybaC.style.top = 0;
          topLeftFin.appendChild(rybaC);
          checkIfWon();
        }
    })

    rybaD.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaD.style.left = touchLocation.pageX + 'px';
        rybaD.style.top = touchLocation.pageY + 'px';
      })
      rybaD.addEventListener('touchend', function(e) {
        var x = parseInt(rybaD.style.left);
        var y = parseInt(rybaD.style.top);
        let topRightFin = document.getElementById("topRightFin");
        let rect = topRightFin.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaD.style.left = 0;
          rybaD.style.top = 0;
          topRightFin.appendChild(rybaD);
          checkIfWon();
        }
    })

    rybaE.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaE.style.left = touchLocation.pageX + 'px';
        rybaE.style.top = touchLocation.pageY + 'px';
      })
    rybaE.addEventListener('touchend', function(e) {
        var x = parseInt(rybaE.style.left);
        var y = parseInt(rybaE.style.top);
        let downRightFin = document.getElementById("downRightFin");
        let rect = downRightFin.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaE.style.left = 0;
          rybaE.style.top = 0;
          downRightFin.appendChild(rybaE);
          checkIfWon();
        }
    })

    rybaF.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaF.style.left = touchLocation.pageX + 'px';
        rybaF.style.top = touchLocation.pageY + 'px';
      })
    rybaF.addEventListener('touchend', function(e) {
        var x = parseInt(rybaF.style.left);
        var y = parseInt(rybaF.style.top);
        let downMidFin = document.getElementById("downMidFin");
        let rect = downMidFin.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaF.style.left = 0;
          rybaF.style.top = 0;
          downMidFin.appendChild(rybaF);
          checkIfWon();
        }
    })

    rybaG.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaG.style.left = touchLocation.pageX + 'px';
        rybaG.style.top = touchLocation.pageY + 'px';
      })
      rybaG.addEventListener('touchend', function(e) {
        var x = parseInt(rybaG.style.left);
        var y = parseInt(rybaG.style.top);
        let downLeftFin = document.getElementById("downLeftFin");
        let rect = downLeftFin.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaG.style.left = 0;
          rybaG.style.top = 0;
          downLeftFin.appendChild(rybaG);
          checkIfWon();
        }
    })

    rybaH.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        rybaH.style.left = touchLocation.pageX + 'px';
        rybaH.style.top = touchLocation.pageY + 'px';
      })
    rybaH.addEventListener('touchend', function(e) {
        var x = parseInt(rybaH.style.left);
        var y = parseInt(rybaH.style.top);
        let middle = document.getElementById("middle");
        let rect = middle.getBoundingClientRect();
        if((x >= rect.x) && (x < (rect.x + rect.width))
            && (y >= rect.y) && (y < (rect.y + rect.height))){
          rybaH.style.left = 0;
          rybaH.style.top = 0;
          middle.appendChild(rybaH);
          checkIfWon();
        }
    })
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(!ev.target.draggable) {                  //kontrola, ci sa snazime polozit obrazok na obrazok(draggable parameter)
      ev.target.appendChild(document.getElementById(data));
    }

    checkIfWon();
  }

  function checkIfWon(){
    let elements = document.getElementById("inside").children;
    for(let i = 0; i < 8; i++) {
      if(elements[i].childElementCount == 0) {
        return;
      }
    }
    if((elements[0].children[0].id == "castE") &&
      (elements[1].children[0].id == "castA") &&
      (elements[2].children[0].id == "castD") &&
      (elements[3].children[0].id == "castG") && 
      (elements[4].children[0].id == "castF") &&
      (elements[5].children[0].id == "castB") &&
      (elements[6].children[0].id == "castH") &&
      (elements[7].children[0].id == "castC")){
      alert("Gratulujeme, úspešne ste si poskladali vianočného kapra!");
      stop();
      gameFinished = true;
    }
    
  }

  //STOPKY
  //ZDROJ: https://stackoverflow.com/questions/31948235/stopwatch-timer-save-var-and-show-in-high-score-list-html-js
  var clsStopwatch = function() {
    // Private vars
    var startAt = 0; // Time of last start / resume. (0 if not running)
    var lapTime = 0; // Time on the clock when last stopped in milliseconds
 
    var now = function() {
      return (new Date()).getTime();
    };
 
    // Public methods
    // Start or resume
    this.start = function() {
      startAt = startAt ? startAt : now();
    };
 
    // Stop or pause
    this.stop = function() {
      // If running, update elapsed time otherwise keep it
      lapTime = startAt ? lapTime + now() - startAt : lapTime;
      startAt = 0; // Paused
    };
 
    // Reset
    this.reset = function() {
      lapTime = startAt = 0;
    };
 
    // Duration
    this.time = function() {
      return lapTime + (startAt ? now() - startAt : 0);
    };
  };
 
  var x = new clsStopwatch();
  var $time;
  var clocktimer;
  var ourTime = 3;
 
  function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
  }
 
  function formatTime(time) {
    var h = m = s = ms = 0;
    var newTime = '';
 
    h = Math.floor(time / (60 * 60 * 1000));
    time = time % (60 * 60 * 1000);
    m = Math.floor(time / (60 * 1000));
    time = time % (60 * 1000);
    s = Math.floor(time / 1000);
    ms = time % 1000;
 
    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
    return newTime;
  }
 
  function update() {
    $time.innerHTML = formatTime(x.time());
  }
 
  function stop() {
    x.stop();
    clearInterval(clocktimer);
  }
 
  function reset() {
    stop();
    x.reset();
    update();
  }

  function start() {
    if(gameFinished) {
      gameFinished = false;
      let carp = document.getElementById("inside");
      let out = document.getElementById("fishtank");
      console.log(carp.children.length);
      for(let i = 0; i < carp.children.length; i++) {
        out.appendChild(carp.children[i].children[0]);
      }
    }
    x.reset();
    //Declare $time here, so update() knows which field it needs to update
    $time = document.getElementById('time');
    clocktimer = setInterval("update()", 41);
    x.start();
    document.getElementById("fishtank").style.display = "inline-block";
  }

function showDemo(){
  let demo = document.getElementById("demo");
  demo.style.display = "block";
}
