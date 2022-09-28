//TODO:zobrazenie modalu k pouzivaniu cookies

// Webcomponenty
const counterTemplate = document.createElement('template');
counterTemplate.innerHTML = `
    <div>
    <span id="counter"></span>
    <span id="accesses"></span>
    </div>
`;


class WebCounter extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(counterTemplate.content.cloneNode(true));
        this.shadowRoot.getElementById("counter").innerText = "Counter: ";
        this.shadowRoot.getElementById("accesses").innerText = personal_acceses();
    }

    connectedCallback() {
    }
}


window.customElements.define('web-counter', WebCounter);

//zistenie pristupov na stranku z cookies a zapisanie
function personal_acceses() {
    var accesses;

    //when cookies not existing or invalid for our usage(not containing a number)
    if (getCookie("personal accesses") == null ||
        isNaN(parseInt(getCookie("personal accesses"))) === true) {
        accesses = 0;
        setCookie("personal accesses", accesses, 10);
    }
    var a = getCookie("personal accesses")
    accesses = parseInt(a);
    accesses++;
    setCookie("personal accesses", accesses, 10);
    a = getCookie("personal accesses")
    console.log(a);
 return a;
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
