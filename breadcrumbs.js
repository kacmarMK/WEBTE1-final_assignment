var menu = document.getElementById("menu");
var game1 = document.getElementById("game1");
var game2 = document.getElementById("dfgame");
var game3 = document.getElementById("game2");
var gallery = document.getElementById("gallery");
var worktable = document.getElementById("worktable");
var stlpec = document.getElementById("navbar");

window.onload = addHomeBreadcrumb();



var main = document.getElementsByClassName("main");

function addContactBreadcrumb() {
    let list = document.getElementById("breadcrumbList");   //zoznam breadcrumbs
    let newLi = document.createElement("li");               //nova polozka v zozname
    let newA = document.createElement("a");                 //odkaz na zobrazenie

    worktable.style.display = "block";
    stlpec.style.display = "none";
    gallery.style.display = "none";
    game1.style.display = "none";
    game2.style.display = "none";
    game3.style.display = "none";
    if(list.children.length < 5){       //ak nie je zaplnena lista s piatimi breadcrumbs, vytvori novu polozku a vlozi ju do listu     
        var previous = list.children[list.children.length-1].children[0];
        if(previous == undefined) {
            return;
        }
        newA.innerText = "Kontakt";
        
        if(previous.innerText == newA.innerText) {
            return;
        }
        newA.addEventListener("click", function(){                      //event kliknutia na breadcrumb
            
            addContactBreadcrumb();
        });

        newLi.appendChild(newA);                //pridanie odkazu do zoznamu
        list.appendChild(newLi);
    }
    else {                              // ak je zaplnena lista, prepise vsetky prvky
        list.children[0].remove();      //odstranenie prveho prvku zlava a nasledne pridanie breadcrumbu
        addContactBreadcrumb();
    }
}

function addHomeBreadcrumb() {
    let list = document.getElementById("breadcrumbList");   //zoznam breadcrumbs
    let newLi = document.createElement("li");               //nova polozka v zozname
    let newA = document.createElement("a");                 //odkaz na zobrazenie
    if(list.children.length < 5){       //ak nie je zaplnena lista s piatimi breadcrumbs, vytvori novu polozku a vlozi ju do listu     
        if(list.children.length != 0){
            var previous = list.children[list.children.length-1].children[0];
            if((previous != undefined) && (previous.innerText == newA.innerText)) {
                return;
            }
        }
        newA.innerText = "Domov";
        newA.addEventListener("click", function(){                      //event kliknutia na breadcrumb
            var previous = list.children[list.children.length-2].children[0];
            var current = list.children[list.children.length-1].children[0];
            if(previous.innerText != "Domov"){
                console.log(menu.path);
                if(menu.path.length != 1){
                    console.log(menu.path.splice(0,1));                         //funguje to iba s console.log/netusim preco
                    menu.setAttribute("path", menu.path.splice(0,1));
                }
            }
            if(current.innerText == "Domov"){
                return;
            }

            stlpec.style.display = "block";
            gallery.style.display = "block";
            game1.style.display = "none";  
            game2.style.display = "none";
            game3.style.display = "none";
            worktable.style.display = "none";  
            addHomeBreadcrumb();
            
        });

        newLi.appendChild(newA);                //pridanie odkazu do zoznamu
        list.appendChild(newLi);
    }
    else {                              // ak je zaplnena lista, prepise vsetky prvky
        list.children[0].remove();      //odstranenie prveho prvku zlava a nasledne pridanie breadcrumbu
        addHomeBreadcrumb();
    }
}

document.getElementById("homeButton").onclick = function(){
    let list = document.getElementById("breadcrumbList");   //zoznam breadcrumbs
    var previous = list.children[list.children.length-2].children[0];
    var current = list.children[list.children.length-1].children[0];
    if(previous.innerText != "Domov"){
        console.log(menu.path.splice(0,1));                         //funguje to iba s console.log/netusim preco
        menu.setAttribute("path", menu.path.splice(0,1));
    }
    if(current.innerText == "Domov"){
        return;
    }

    stlpec.style.display = "block";
    gallery.style.display = "block";
    game1.style.display = "none";  
    game2.style.display = "none";
    game3.style.display = "none";
    worktable.style.display = "none";  
    addHomeBreadcrumb();
}

function addGameBreadcrumb(string) {
    let list = document.getElementById("breadcrumbList");   //zoznam breadcrumbs
    let newLi = document.createElement("li");               //nova polozka v zozname
    let newA = document.createElement("a");                 //odkaz na zobrazenie

    stlpec.style.display = "none";
    gallery.style.display = "none";
    worktable.style.display = "none";
    if(string == "dfgame"){
        game1.style.display = "none";
        game2.style.display = "block";
        game3.style.display = "none";
    }
    else if (string == "game1") {
        game1.style.display = "block";
        game2.style.display = "none";
        game3.style.display = "none";
    }
    else {
        game3.style.display = "block";
        game1.style.display = "none";
        game2.style.display = "none";
    }

    if(list.children.length < 5){       //ak nie je zaplnena lista s piatimi breadcrumbs, vytvori novu polozku a vlozi ju do listu     
        var previous = list.children[list.children.length-1].children[0];
        if(previous == undefined) {
            return;
        }
        newA.innerText = string;
        
        if(previous.innerText == newA.innerText) {
            return;
        }
        newA.addEventListener("click", function(){                      //event kliknutia na breadcrumb
            
            addGameBreadcrumb(string);
            
        });

        newLi.appendChild(newA);                //pridanie odkazu do zoznamu
        list.appendChild(newLi);
    }
    else {                              // ak je zaplnena lista, prepise vsetky prvky
        list.children[0].remove();      //odstranenie prveho prvku zlava a nasledne pridanie breadcrumbu
        addGameBreadcrumb(string);
    }
}

function addBreadcrumb() {  //autor: Marek Kačmár
    let list = document.getElementById("breadcrumbList");   //zoznam breadcrumbs
    let newLi = document.createElement("li");               //nova polozka v zozname
    let newA = document.createElement("a");                 //odkaz na zobrazenie
    let path = menu.path;
    if(list.children.length < 5){       //ak nie je zaplnena lista s piatimi breadcrumbs, vytvori novu polozku a vlozi ju do listu 
        if(path.length == 1) {          //ak nema, co pridat, vrati sa
            return;
        }
        
        if(duplicity(path, list)) {     //kontrola stlacenia tej istej polozky
            return;
        }
        
        newA.innerText = path[path.length-1];
        newA.setAttribute("path", path);        //pridanie cesty do odkazu


        newA.addEventListener("click", function(){                      //event kliknutia na breadcrumb
            menu.customMethod(path);
            menu.setAttribute("path", path);            //aktivovanie filtra v galerii
            stlpec.style.display = "block";
            gallery.style.display = "block";
            game1.style.display = "none";  
            game2.style.display = "none";
            game3.style.display = "none";
            worktable.style.display = "none";  
            addBreadcrumb();                    //po kliknuti na breadcrumb prida dalsi
        });

        newLi.appendChild(newA);                //pridanie odkazu do zoznamu
        list.appendChild(newLi);
    }
    else {                              // ak je zaplnena lista, prepise vsetky prvky
        if(duplicity(path, list)) {
            return;
        }
        list.children[0].remove();      //odstranenie prveho prvku zlava a nasledne pridanie breadcrumbu
        addBreadcrumb();
    }
}

function clean(){
    let elements = menu.shadowRoot.childNodes[3].children;              //vycistenie zobrazeni
    for(let i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            elements[i].style.display = "none";
        }
        for(let j = 0; j < elements[i].children.length; j++) {
            if(elements[i].children[j].style.display == "block") {
                elements[i].children[j].style.display = "none";
            }
        }
    }
}

function duplicity(path, list) {            //kontrola duplicitnych breadcrumbov
    var previous = list.children[list.children.length-1].children[0].getAttribute("path");
        if(previous != null) {
            previous = previous.split(',');
            if(path[path.length-1] == previous[previous.length-1] ||
                (path[path.length-1] == previous[previous.length-2])){
                return true;
            }
        }
    return false;
}
