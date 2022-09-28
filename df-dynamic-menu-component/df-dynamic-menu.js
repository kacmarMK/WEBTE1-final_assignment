class Menu extends HTMLElement { //author: Dominik Fullajtár, 30.12.2020
  constructor() {
    super();
    this.path = ',';
    this.data = {
      "subcategories": [
        {
          "title": "Priklad Jeden",
          "description": "Chystáte sa kúpiť nový notebook, ale neviete, pre ktorý sa rozhodnúť? Pomôžeme vám zistiť, aký druh notebooku je pre vás ten pravý a podľa akých parametrov si ho zo širokej ponuky vybrať.",
          "price": "669 €",
          "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC027p7q0"
        },
        {
          "title": "Notebooky",
          "description": "Chystáte sa kúpiť nový notebook, ale neviete, pre ktorý sa rozhodnúť? Pomôžeme vám zistiť, aký druh notebooku je pre vás ten pravý a podľa akých parametrov si ho zo širokej ponuky vybrať.",
          "subcategories": [
            {
              "title": "MacBook",
              "description": "MacBook je prenosný počítač od spoločnosti Apple, ktorý využíva vlastný operačný systém OS X. Je vhodný ako na každodenné činnosti, tak aj pre profesionálov, ktorí pre svoju prácu vyžadujú maximálny výkon. Prečo prejsť na MacBook, pre koho je aký model určený a v čom sa medzi sebou líšia?",
              "subcategories": [
                {
                  "title": "Macbook Air 13\" M1 Zlatý SK 2020",
                  "description": "MacBook – Apple M1, 13.3\" IPS lesklý 2560 × 1600 , RAM 8GB, Apple M1 8-jadrová GPU, SSD 2000GB, podsvietená klávesnica, webkamera, USB-C, čítačka odtlačkov prstov, WiFi 6, 49.9 Wh batéria, MAC OS",
                  "price": "2 109 €",
                  "src": "https://cdn.alza.sk/Foto/f3/NL/NL244a2c0j.jpg"
                },
                {
                  "title": "Macbook Air 13\" M1 Vesmírne sivý SK 2020",
                  "description": "MacBook – Apple M1, 13.3\" IPS lesklý 2560 × 1600 , RAM 16GB, Apple M1 8-jadrová GPU, SSD 512GB, podsvietená klávesnica, webkamera, USB-C, čítačka odtlačkov prstov, WiFi 6, MAC OS",
                  "price": "1 639 €",
                  "src": "https://cdn.alza.sk/Foto/f3/NL/NL244a2a1b.jpg"
                },
                {
                  "title": "Macbook Air 13\" M1 SK Strieborný 2020",
                  "description": "MacBook – Apple M1, 13.3\" IPS lesklý 2560 × 1600 , RAM 16GB, Apple M1 7-jadrová GPU, SSD 256GB, podsvietená klávesnica, webkamera, USB-C, čítačka odtlačkov prstov, WiFi 6, 49.9 Wh batéria, MAC OS",
                  "price": "1 359 €",
                  "src": "https://cdn.alza.sk/Foto/f3/NL/NL244a1g3.jpg"
                }
              ]
            },
            {
              "title": "Priklad Dva",
              "description": "Chystáte sa kúpiť nový notebook, ale neviete, pre ktorý sa rozhodnúť? Pomôžeme vám zistiť, aký druh notebooku je pre vás ten pravý a podľa akých parametrov si ho zo širokej ponuky vybrať.",
              "price": "669 €",
              "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC027p7q0"
            },
            {
              "title": "Priklad Tri",
              "description": "Chystáte sa kúpiť nový notebook, ale neviete, pre ktorý sa rozhodnúť? Pomôžeme vám zistiť, aký druh notebooku je pre vás ten pravý a podľa akých parametrov si ho zo širokej ponuky vybrať.",
              "price": "669 €",
              "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC027p7q0"
            },
            {
              "title": "Lenovo",
              "description": "Notebooky Lenovo – doručíme už v deň objednávky. Vyberte si tovar bezpečne z domova a nechajte si ho doviezť až domov, vyzdvihnite si ho bezkontaktne z AlzaBoxe, či na našich pobočkách, kde sa striktne dodržiavajú všetky hygienické opatrenia. Prečítajte si, prečo ešte nakupovať na Alza.sk.",
              "subcategories": [
                {
                  "title": "Lenovo V15-IIL Iron Grey",
                  "description": "Notebook – Intel Core i5 1035G1 Ice Lake, 15.6\" TN antireflexný 1920 × 1080, RAM 8GB DDR4, Intel UHD Graphics, SSD 512GB, webkamera, WiFi 5, 35 Wh batéria, Windows 10 Pro",
                  "price": "719 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NT220b2d3e1"
                },
                {
                  "title": "Lenovo Yoga C740-15IML Iron Grey",
                  "description": "Tablet PC – Intel Core i7 10510U Comet Lake, dotykový 15.6\" IPS lesklý 1920 × 1080, RAM 16GB DDR4, Intel UHD Graphics, SSD 1000GB, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, čítačka odtlačkov prstov, stylus, WiFi 6, 60.3 Wh batéria, Windows 10 Home (NBD)",
                  "price": "1 289 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NT302o3j5p3"
                },
                {
                  "title": "Lenovo Legion 5P 15IMH05H",
                  "description": "Herný notebook – Intel Core i5 10300H Comet Lake, 15.6\" IPS antireflexný 1920 × 1080 144Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 2060 6GB, SSD 1000GB, numerická klávesnica, podsvietená klávesnica, USB 3.2 Gen 1, USB-C, WiFi 6, Windows 10 Home",
                  "price": "1 249 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NT379t71f8"
                },
                {
                  "title": "Lenovo Legion 7 15IMHg05 Slate Grey kovový",
                  "description": "Herný notebook – Intel Core i7 10875H Comet Lake, 15.6\" IPS antireflexný 1920 × 1080 144Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 2070 Super Max-Q 8GB, SSD 1000GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, WiFi 6, 80 Wh batéria, Windows 10 Home (NBD)",
                  "price": "2 199 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NT379v01n"
                },
                {
                  "title": "Lenovo ThinkBook 15-IIL",
                  "description": "Notebook – Intel Core i7 1065G7 Ice Lake, 15.6\" IPS antireflexný 1920 × 1080, RAM 16GB DDR4, Intel Iris Plus Graphics, SSD 512GB, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, WiFi 5, 45 Wh batéria, Windows 10 Pro",
                  "price": "909 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NT187g81d1"
                }
              ]
            },
            {
              "title": "Acer",
              "description": "Notebooky Acer – doručíme už v deň objednávky. Vyberte si tovar bezpečne z domova a nechajte si ho doviezť až domov, vyzdvihnite si ho bezkontaktne z AlzaBoxe, či na našich pobočkách, kde sa striktne dodržiavajú všetky hygienické opatrenia. Prečítajte si, prečo ešte nakupovať na Alza.sk.",
              "subcategories": [
                {
                  "title": "Acer Aspire 3 Pure Silver",
                  "description": "Notebook – AMD Ryzen 5 3500U, 15.6\" matný 1920 × 1080, RAM 8GB DDR4, AMD Radeon R6 2GB, SSD 512GB, USB 3.2 Gen 1, WiFi 5, 48 Wh batéria, Windows 10 Home (A315-23G-R0GN)",
                  "price": "669 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC027p7q0"
                },
                {
                  "title": "Acer Nitro 5 Obsidian Black",
                  "description": "Herný notebook – Intel Core i5 10300H Comet Lake, 15.6\" IPS matný 1920 × 1080 144Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 2060 6GB, SSD 1000GB, podsvietená klávesnica, USB 3.2 Gen 1, USB-C, WiFi 6, 3560 mAh batéria, Windows 10 Home HDD upgrade kit (AN515-55-540U)",
                  "price": "1 209 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC028h0p2"
                },
                {
                  "title": "Acer Spin 5 Touch Steel Gray celokovový + rožšírenia záruky na 3 roky zadarmo",
                  "description": "Tablet PC – Intel Core i5 1035G4 Ice Lake, dotykový 13.5\" IPS matný 2256 × 1504, RAM 16GB LPDDR4X, Intel Iris Pro Graphics 5200, SSD 512GB, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, stylus, WiFi 6, Windows 10 Pro (NBD) (SP513-54N-546V)",
                  "price": "1 298 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f4&cd=NC024w2s5i3&i=1.jpg"
                },
                {
                  "title": "Acer Swift 3 Sparkly Silver celokovový + rožšírenia záruky na 3 roky zadarmo",
                  "description": "Notebook – Intel Core i7 1165G7 Tiger Lake, 13.5\" IPS matný 2256 × 1504, RAM 16GB LPDDR4, Intel Iris Xe Graphics, SSD 512GB, podsvietená klávesnica, USB 3.2 Gen 1, USB-C, čítačka odtlačkov prstov, WiFi 6, 56 Wh batéria, Windows 10 Home (SF313-53-7102)",
                  "price": "1 140,90 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC138j1m3c6"
                },
                {
                  "title": "Acer Spin 1 Steel Gray celokovový + rožšírenia záruky na 3 roky zadarmo",
                  "description": "Tablet PC – Intel Pentium Silver N5000 Gemini Lake, dotykový 11.6\" IPS lesklý 1920 × 1080, RAM 4GB LPDDR4, Intel UHD Graphics 605, Flash 64GB, webkamera, USB 3.2 Gen 1, WiFi 5, 4670 mAh batéria, Windows 10 S (SP111-34N-P8A4)",
                  "price": "472 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=NC024u6j"
                }
              ]
            },
            {
              "title": "Dell",
              "description": "Notebooky Dell – doručíme už v deň objednávky. Vyberte si tovar bezpečne z domova a nechajte si ho doviezť až domov, vyzdvihnite si ho bezkontaktne z AlzaBoxe, či na našich pobočkách, kde sa striktne dodržiavajú všetky hygienické opatrenia. Prečítajte si, prečo ešte nakupovať na Alza.sk.",
              "subcategories":[
                {
                  "title": "Dell Latitude 5510",
                  "description": "Notebook – Intel Core i5 10310U Comet Lake, 15.6\" IPS antireflexný 1920 × 1080, RAM 16GB DDR4, Intel UHD Graphics, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, WiFi 6, 5913 mAh batéria, Windows 10 Pro (NBD) CKD49",
                  "price": "1 119 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=ADC453f29m"
                },
                {
                  "title": "Dell G5 15 Gaming (5500) Black",
                  "description": "Herný notebook – Intel Core i7 10750H Comet Lake, 15.6\" WVA matný 1920 × 1080 300Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 2070 Max-Q 8GB, SSD 1000GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, čítačka odtlačkov prstov, WiFi 6, 5965 mAh batéria, Windows 10 Home (NBD)",
                  "price": "1 659 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=ADC155h98j"
                }
              ]
            }
          ]
        },
        {
          "title": "Monitory",
          "description": "Monitor je neoddeliteľnou súčasťou každej PC zostavy. Veľkú časť monitorov síce môžete používať na viac účelov, rozdiely medzi nimi ale sú, a to najmä v kvalite a vlastnostiach obrazu. Nižšie vám poradíme, na čo sa pri výbere zamerať a aký monitor či displej je pre vás najlepší.",
          "subcategories": [
            {
              "title": "Herné",
              "description": "Herný monitor je v honbe za virtuálnymi úspechmi, kde môže byť každá milisekunda rozhodujúca a nenahraditeľná. Vďaka nízkej odozve a vysokej obnovovacej frekvencii dokáže bleskurýchlo reagovať na zmeny obrazu a zobrazovať plynule a ostro aj tie najkomplikovanejšie akčné scény.",
              "subcategories": [
                {
                  "title": "27\" Samsung Odyssey C27RG50",
                  "description": "LCD monitor prehnutý, Full HD 1920×1080, displej VA, 16:9, odozva 4ms, obnovovacia frekvencia 240Hz, G-Sync, jas 250cd/m2, kontrast 3000:1, DisplayPort 1.4, HDMI 2.0, slúchadlový výstup, VESA",
                  "price": "229 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=WH605e1g3"
                },
                {
                  "title": "27\" Dell Gaming S2721DGF",
                  "description": "LCD monitor Quad HD 2560×1440, displej IPS, 16:9, odozva 1ms, obnovovacia frekvencia 165Hz, FreeSync, farebná hĺbka 8bit, HDR, jas 400cd/m2, kontrast 1000:1, DisplayPort 1.4, HDMI 2.0, slúchadlový výstup, nastaviteľná výška, pivot, VESA",
                  "price": "445,90 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=ADL27u36d0"
                },
                {
                  "title": "Xiaomi Mi Curved Gaming Monitor 34\"",
                  "description": "LCD monitor prehnutý, Quad HD 3440 × 1440, displej VA, 21:9 širokouhlý, odozva 4ms, obnovovacia frekvencia 144Hz, FreeSync, jas 300cd/m2, kontrast 3000:1, DisplayPort 1.4, HDMI 2.0, slúchadlový výstup, VESA",
                  "price": "424,90 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=XIAROh1"
                },
                {
                  "title": "24\" ASUS VG249Q Gaming",
                  "description": "LCD monitor Full HD 1920×1080, displej IPS, 16:9, odozva 1ms, obnovovacia frekvencia 144Hz, FreeSync, jas 250cd/m2, kontrast 1000:1, DisplayPort 1.2, HDMI 1.4, VGA, slúchadlový výstup, nastaviteľná výška, pivot, repro, VESA",
                  "price": "188,90 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=WA039i4c"
                }
              ]
            },
            {
              "title": "Profesionálne",
              "description": "Profesionálne monitory vynikajú detailným obrazom, vernou reprodukciou farieb a dobrými pozorovacími uhlami. Hodia sa tak na prácu s fotkami, videami alebo v grafických programoch. Ako teda vybrať ideálny profesionálny monitor? Nechajte sa pri výbere inšpirovať.",
              "subcategories": [
                {
                  "title": "31,5\" GIGABYTE G32QC",
                  "description": "LCD monitor prehnutý, Quad HD 2560×1440, displej VA, 16:9, odozva 1ms, obnovovacia frekvencia 165Hz, FreeSync, farebná hĺbka 8bit, HDR, jas 350cd/m2, kontrast 3000:1, DisplayPort 1.2, HDMI 2.0, USB, slúchadlový výstup, nastaviteľná výška, VESA",
                  "price": "358,99 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=CGG32QC"
                },
                {
                  "title": "27\" Samsung C27F396",
                  "description": "LCD monitor prehnutý, Full HD 1920×1080, displej VA, 16:9, odozva 4ms, FreeSync, jas 250cd/m2, kontrast 3000:1, HDMI 1.4, HDMI 2.0, VGA, slúchadlový výstup, VESA",
                  "price": "152 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=WH605e11"
                },
                {
                  "title": "27\" Samsung Odyssey C27RG50",
                  "description": "LCD monitor prehnutý, Full HD 1920×1080, displej VA, 16:9, odozva 4ms, obnovovacia frekvencia 240Hz, G-Sync, jas 250cd/m2, kontrast 3000:1, DisplayPort 1.4, HDMI 2.0, slúchadlový výstup, VESA",
                  "price": "229 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=WH605e1g3"
                },
                {
                  "title": "27\" Dell Gaming S2721DGF",
                  "description": "LCD monitor Quad HD 2560×1440, displej IPS, 16:9, odozva 1ms, obnovovacia frekvencia 165Hz, FreeSync, farebná hĺbka 8bit, HDR, jas 400cd/m2, kontrast 1000:1, DisplayPort 1.4, HDMI 2.0, slúchadlový výstup, nastaviteľná výška, pivot, VESA",
                  "price": "445,90 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=ADL27u36d0"
                },
                {
                  "title": "49\" Samsung C49RG90 Monitor",
                  "description": "LCD monitor prehnutý, Quad HD 5120 × 1440, displej QLED, 32:9 širokouhlý, odozva 4ms, obnovovacia frekvencia 120Hz, FreeSync, farebná hĺbka 10bit, HDR, jas 600cd/m2, kontrast 3000:1, DisplayPort, DisplayPort 1.4, HDMI 2.0, USB, slúchadlový výstup, nastaviteľná výška, VESA",
                  "price": "1 069 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=WH605Q"
                }
              ]
            },
            {
              "title": "Rozlisenie 8K",
              "description": "Dlhší popis obrázku 1",
              "subcategories": [
                {
                  "title": "32\" Dell UP3218K UltraSharp",
                  "description": "LCD monitor 8K Ultra HD 7680 × 4320, displej IPS, 16:9, odozva 6ms, farebná hĺbka 10bit, jas 400cd/m2, kontrast 1300:1, DisplayPort, USB, slúchadlový výstup, nastaviteľná výška, pivot",
                  "price": "3 396,90 €",
                  "src": "https://cdn.alza.sk/ImgW.ashx?fd=f3&cd=ADL32u35"
                }
              ]
            }
          ]
        }
      ]
    };
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = ` 
        <style>         
            h1{
                font-size: 1.75rem;
                font-weight: bolder;
                color: #320000;
                padding-bottom: 20px;
            }
            h2{
                font-size: 1.5rem;
                font-weight: bold;
                color: #500000;
            }            
            h3{
                font-size: 1.25rem;
                font-weight: normal;
                color: #6e0000;
            }
            h4{
                font-size: 1rem;
                font-weight: lighter;
                color: #8c0000;
            }
            h5{
                font-size: 0.75rem;
                font-weight: lighter;
                color: #aa0000;
            }
            h6{
                font-size: 0.5rem;
                font-weight: lighter;
                color: #c80000;
            }
            h1:hover,
            h2:hover,
            h3:hover,
            h4:hover,
            h5:hover,
            h6:hover{
            cursor: pointer;
            color: #0009e5;
            text-shadow: 0.6px 0.6px #000000;
            }
            
            ul{
                padding-left: 1.5rem;
                width: 10rem;
                list-style-image: url("df-dynamic-menu-component/menu.svg");
                         
            }
            .item{
                  list-style-image: url("df-dynamic-menu-component/eye.svg");
            }
        </style>
        `;
  }

  connectedCallback() {
    this.setAttribute('path', '');
    const test = document.createElement('ul');
    this._generateMenu(this.data.subcategories, '', test, 1);
    this.shadowRoot.appendChild(test);
  };

  //vygenerovanie elementov menu po lifecycle - connectedCallback
  //!rekurzivna funkcia!
  //categories - podkategorie struktury this.data
  //path - cesta k aktualne prehladavanej podkategorii
  //ul - unordered list, vytvoreny v predchadzajucom volani, appenduju sa na neho podkategorie
  //n - pocitadlo, podla neho sa vytvaraju H elementy podla vnorenia h1 -> h6, po siestej podkategorii sa vytvaraju iba h6
  _generateMenu(categories, path, ul, n) {
    if (categories === undefined) return;
    if (n > 6) n=6;
    categories.forEach( category => {
      const parsed = this.parseCategoryAndPath(category.title);
      const newPath = path +'/'+ parsed;
      const li = document.createElement('li');
      const ul2 = document.createElement('ul');
      ul2.style.display = 'none';
      ul2.setAttribute('category', parsed);
      const header1 = document.createElement('h'+n);
      header1.textContent =  category.title;
      header1.setAttribute('path', newPath);
      header1.addEventListener('click', this._toggleDisplay.bind(this));
      ul.appendChild(li);
      li.appendChild(header1);
      ul.appendChild(ul2);
      if (category.subcategories === undefined){
        li.className = "item";
      }
      this._generateMenu(category.subcategories,  newPath , ul2, (n+1));
    });
  }

  //funkcia ktora zabezpecuje zobrazenie/skrytie kategorii menu
  //vyvolana event listenerom 'click' na riadku 316
  _toggleDisplay(event){
    const sourceElementTextContent = event.target.textContent;
    const containerOfSubcategories =this.shadowRoot.querySelector('[category='+ this.parseCategoryAndPath(sourceElementTextContent) +']');
    if( containerOfSubcategories.style.display === 'block'){ //ak sme klikli na viditelny tak sa skryje
      containerOfSubcategories.style.display = 'none';
      const index = this.path.indexOf(this.parseCategoryAndPath(sourceElementTextContent)); //najdenie indexu prvku cesty od ktoreho chceme vsetko vymazat aby sa skryli aj vsetky podkategorie
      if (index > -1) {
        this.path.splice(index, (this.path.length - index));
      }
    } else {
      containerOfSubcategories.style.display = 'block';
      this._closeExceptPath(event.target.getAttribute('path').split('/'), this.data.subcategories, 1);
      this.path = this.parseCategoryAndPath(event.target.getAttribute('path')).split('/');
    }
    this.setAttribute('path', this.path);
  }

  //!rekurzivna funkcia! (pocitadlo-n)
  //skryju sa vsetky podkategorie okrem kategorii except(obsahuje celu cestu)
  _closeExceptPath(except, categories, n){
    if (categories === undefined) return;
    categories.forEach( category => {
      if (this.parseCategoryAndPath(category.title) !== except[n]) {
        let found = this.shadowRoot.querySelector('[category='+ this.parseCategoryAndPath(category.title) +']');
        if (found) found.style.display = 'none';
      }
      if (category.subcategories === undefined){
        return;
      }
      this._closeExceptPath(except, category.subcategories, (n+1));
    })
  }

  //vymaze niektore char aby sa nazvy mohli pouzivat ako atributy
  parseCategoryAndPath(string){
    let tmp = string.replace("+", '');
    string = tmp.replace("(", '');
    tmp = string.replace(')', '');
    return tmp.replace(/[0-9]| |>|<|!|-|"|'|=|,|:|/g, '');
  }

  //public metoda (vsetky zacinajuce _nazov su akoze private)
  //path je typu array
  //metoda je volana z vonku ked nejaky vonkajsi jav zmenil cestu a chceme tomu prisposobit spravne zobrazenie menu
  //      aby sa nestalo ze je menu rozkliknute v inej kategorii ako sa realne nachadzame
  customMethod(path) { //ked chalani updatnu github, pullni cely projekt a premenuj na :syncMenu
    const tmp = path[path.length -1];
    const found =this.shadowRoot.querySelector('[category='+ this.parseCategoryAndPath(tmp) +']');
    const style = found.style.display;
    if( style === 'block'){ //bug v tejto vetve kodu, this.path dostava zlu hodnotu, pravdepodobne chyba v style.display
      found.style.display = 'none';
      const index = this.path.indexOf(this.parseCategoryAndPath(tmp)); //najdenie indexu prvku cesty od ktoreho chceme vsetko vymazat aby sa skryli aj vsetky podkategorie
      if (index > -1) {
        this.path.splice(index, (this.path.length - index));
      }
    } else {
      found.style.display = 'block';
      this._closeExceptPath(path, this.data.subcategories, 1);
      this._openPath(path, this.data.subcategories, 1);
    }
    this.path = path;
  }

  //!rekurzivna!
  //otvori podkategorie podla 'path'
  _openPath(open, categories, n){
    categories.forEach( category => {
      if (category.subcategories === undefined){
        return;
      }
      if (this.parseCategoryAndPath(category.title) === open[n]) {
        let found = this.shadowRoot.querySelector('[category='+ this.parseCategoryAndPath(category.title) +']');
        if (found) found.style.display = 'block';
      }
      this._openPath(open, category.subcategories, (n+1));
    })
  }

}customElements.define('df-dynamic-menu', Menu);
