const template = document.createElement('template');  //autor: Marek Kačmár
template.innerHTML = `
<div style="text-align: right">
    <p id="date" style="font-style: italic";></p>
    <div class="tooltip">
      <p id="name"></p>
      <span id="tooltipNameday" class="tooltipNameday"></span>
    </div>
    <p>Vyhľadávanie menín: </p>
    <div class="tooltip">
      <select name="nationalities" id="country">
      <option value="SKd">SK</option>
      <option value="CZ">CZ</option>
      <option value="HU">HU</option>
      <option value="PL">PL</option>
      <option value="AT">AT</option>
      </select>
      <input type="text" id="search" value="" placeholder="Zadajte meno alebo dátum">
      <span id="output"></span>
      <span id="tooltip" class="tooltiptext">Prosím zadajte dátum vo forme dd.mm./dd.m./d.mm./d.m.</span>
    </div> 
    
</div>
<style>
input[type=text] {
    background-color: white;
    color: black;
    border: black;
    border: 1px solid;
    width: 220px;
    font-style: italic;
    font-size: 18px;
}
select {
  font-size: 18px;
}
.tooltip:hover {
  cursor: pointer;
}

.tooltip .tooltiptext{
  
  visibility: hidden;
  width: 230px;
  background-color: black;
  color: red;
  text-align: center;
  border-radius: 2px;
  padding: 20px;
  border-radius: 20%;
  right: 250px;
  top: 130px;
  z-index: 1;
}
.tooltiptext {
  /* Position the tooltip */
  position: absolute;
  margin-top: -84px;
  margin-left: -175px;
}
.tooltip .tooltipNameday{
  visibility: hidden;
  width: 250px;
  background-color: black;
  color: green;
  text-align: center;
  border-radius: 2px;
  padding: 10px;
  border-radius: 20%;
  z-index:2;
}
.tooltipNameday {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  right: 240px;
  top: 30px;
}
.tooltip:hover .tooltipNameday {
  visibility: visible;
}
p, .tooltip {
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 21px;
}

#date{
  font-size: 26px;
}
</style>`;


class Nameday extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
        //Dátum
        var d = new Date();
        var dateString = d.getDate() + ". " + (d.getMonth()+1) + ". " + d.getFullYear();    //formatovany vystup

        const date = this.shadowRoot.querySelector('#date');
        date.innerHTML = dateString;
        
        //Meniny
        var xhttp = new XMLHttpRequest();
        let name = this.shadowRoot.querySelector('#name');
        let otherNamedays = this.shadowRoot.querySelector('#tooltipNameday');
        
        xhttp.onreadystatechange = function() {
          
            if (this.readyState == 4 && this.status == 200) {
              var xmlDoc = this.responseXML;   
              if((d.getMonth()+1) < 10) {                 //pozri, ci mesiac je iba 1 cislo
                dateString = "0" + (d.getMonth()+1);      //pridanie "0" kvoli buducej kontrole
              }
              else {
                dateString = (d.getMonth()+1) + "";
              }
              if((d.getDate()) < 10) {                    //to iste pri dni
                dateString = dateString + "0" + d.getDate();
              }
              else {
                dateString = dateString + d.getDate();
              }
              var data = xmlDoc.getElementsByTagName("zaznam");
              if(dateString == "0101") {
                name.innerHTML = "Dnes nemá nikto na Slovensku a v Česku meniny";       //vypis 1.1.
                otherNamedays.innerHTML = "HU meniny: " + data[0].children[3].innerHTML + "<br>" +
                "PL meniny: " + data[0].children[4].innerHTML + "<br>" + 
                "AT meniny: " + data[0].children[5].innerHTML;
              }
              else {
                for(let i = 1; i < data.length; i++) {
                  if(dateString ==  data[i].children[0].innerHTML) {
                    name.innerHTML = "Meniny má dnes " + data[i].children[1].innerHTML;       //vypis slovenskych mien
                    for(let j = 3; j < data[i].children.length; j++) {
                      if((data[i].children[j].tagName != "SKsviatky") && (data[i].children[j].tagName != "SKdni") && (data[i].children[j].tagName != "CZsviatky"))
                      otherNamedays.innerHTML = otherNamedays.innerHTML + data[i].children[j].tagName + " meniny: " + data[i].children[j].innerHTML + "<br>";
                    }         //ignoruje sviatky a vypise meniny ostatnych krajin
                  }
                }
              }
            }
        };
        xhttp.open("GET", "meniny.xml", true);
        xhttp.send();
        
        //Vyhladavanie
        this.shadowRoot.querySelector('#search').addEventListener('change', () =>     //vyhlada meniny podla mena alebo datumu
        {
          let string = this.shadowRoot.querySelector('#search').value;
          let out = this.shadowRoot.querySelector('#output');
          let tooltip = this.shadowRoot.querySelector('#tooltip');
          let country = this.shadowRoot.querySelector('#country').value;
          var names;

          let found = false;
          if(string.indexOf('.') < 0) {               //ak ma input string v sebe '.', hladaj v datumoch
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = this.responseXML;
                var data = xmlDoc.getElementsByTagName("zaznam");
                for(let i = 1; i < data.length; i++) {
                    for(let k = 1; k < data[i].children.length; k++) {
                      if(country == data[i].children[k].tagName) {      //najdenie menin podla krajiny
                        names = data[i].children[k].innerHTML;
                      }
                    }
                    if(names.indexOf(',') > -1) {     //ak je mien viac, prehlada pole mien
                      let splitNames = names.split(", ");
                      for(let j = 0; j < splitNames.length; j++) {
                        if(string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == splitNames[j].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()){
                          out.innerHTML = splitNames[j] +
                          " má meniny " + 
                          data[i].children[0].innerHTML.substring(2, data[i].children[0].innerHTML.length) +
                            "." +
                            data[i].children[0].innerHTML.substring(0, data[i].children[0].innerHTML.length-2) +
                            ".";
                            found = true;
                            tooltip.style.visibility = 'hidden';
                        }
                      }
                    }   //hladanie podla mena
                    else if(string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == names.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) {
                      out.innerHTML = names +
                       " má meniny " + 
                       data[i].children[0].innerHTML.substring(2, data[i].children[0].innerHTML.length) +
                        "." +
                        data[i].children[0].innerHTML.substring(0, data[i].children[0].innerHTML.length-2) +
                        ".";
                        found = true;
                        tooltip.style.visibility = 'hidden';
                    }
                }
                if(!found) {      //ak sa nenajde
                  let isnum = /^\d+$/.test(string);
                  if(isnum) {
                    out.innerHTML = "Nesprávne zadanie dátumu";
                    tooltip.style.visibility = 'visible';
                  }
                  else {
                    out.innerHTML = "Nesprávne zadanie mena";
                  }
                }
              }
          };
          }
          else {        //hladanie podla datumu
            let splitDate = string.split(".");
            
            if(splitDate.length != 3) {
              out.innerHTML = "Nesprávne zadanie dátumu";
              tooltip.style.visibility = 'visible';
            }
            else if((splitDate[2] != undefined) && (splitDate[2].length != 0)) {
              console.log(splitDate[2].length);
              out.innerHTML = "Nesprávne zadanie dátumu";
              tooltip.style.visibility = 'visible';
              return;
            }
            if(splitDate[0].length == 1) {
              splitDate[0] = "0" + splitDate[0];      
            }
            if(splitDate[1].length == 1) {
              splitDate[1] = "0" + splitDate[1];
            }
            let date = splitDate[1] + splitDate[0];     //spravne naformatovanie kvoli vyhladavaniu
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = this.responseXML;
                var data = xmlDoc.getElementsByTagName("zaznam");
                for(let i = 1; i < data.length; i++) {              //prehladavnie xml dokumentu, porovovnavanie datumov
                    if(date == data[i].children[0].innerHTML) {
                      for(let k = 1; k < data[i].children.length; k++) {
                        if(country == data[i].children[k].tagName) {
                          names = data[i].children[k].innerHTML;
                        }
                      }
                      out.innerHTML = string + " má meniny " + names;
                      found = true;
                      tooltip.style.visibility = 'hidden';
                    }
                }
                if(!found) {
                  out.innerHTML = "Nesprávne zadanie dátumu";
                  tooltip.style.visibility = 'visible';
                }
              }
          };
          }
          xhttp.open("GET", "meniny.xml", true);
          xhttp.send();
        });
    }
}


window.customElements.define('nameday-component', Nameday);