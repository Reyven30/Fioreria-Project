if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', pronto)
} else {
    pronto();
}

function pronto() {

    //CAMBIO DELLE QUANTITA
    var numeroItems = document.getElementsByClassName('numero');
    for (var i = 0; i < numeroItems.length; i++) {
        var input = numeroItems[i];
        input.addEventListener("change", quantitàCambiata);
    }

}

//N ITEMS CAMBIATO
function quantitàCambiata(event) {
    var entrata = event.target;
    if (isNaN(entrata.value) || entrata.value <= 0) {
        entrata.value = 0;
    }
    updatetotale1()
    updatetotale2()
    updatetotale3()
    updatetotale4()
    spesacollettiva()
}

//UPDATE DEL TOTALE

function updatetotale1() {//PREZZO TOTALE DEL PRIMO PRODOTTO
    var box = document.getElementsByClassName('quantita')[0];
    var prezzoElemento = box.getElementsByClassName('costo')[0]
    var quanti = box.getElementsByClassName('numero')[0]
    var prezzo = parseFloat(prezzoElemento.innerText.replace("$", ""));
    var quantità = quanti.value
    if (quantità != 0) {
        totale = (prezzo * quantità);
        //SE IL PREZZO HA NUMERI DECIMALI
        totale = Math.round(totale * 100) / 100;
        if (quantità != 1) {
            document.getElementsByClassName('tot1')[0].innerText =  quantità + " GIRASOLI:" ;
            document.getElementsByClassName('prezzo1')[0].innerText =  "$" + totale;
        }

        else {
            document.getElementsByClassName('tot1')[0].innerText = quantità + " GIRASOLE:";
            document.getElementsByClassName('prezzo1')[0].innerText =  "$" + totale;
        }

    }
    else {
        document.getElementsByClassName('tot1')[0].innerText = "";
        document.getElementsByClassName('prezzo1')[0].innerText = "";
    }
}


function updatetotale2() {  //PREZZO TOTALE DEL SECONDO PRODOTTO
    var box = document.getElementsByClassName('quantita')[1];
    var prezzoElemento = box.getElementsByClassName('costo')[0]
    var quanti = box.getElementsByClassName('numero')[0]
    var prezzo = parseFloat(prezzoElemento.innerText.replace("$", ""));
    var quantità = quanti.value
    if (quantità != 0) {
        totale = (prezzo * quantità);
        //SE IL PREZZO HA NUMERI DECIMALI
        totale = Math.round(totale * 100) / 100;
        if (quantità != 1) {
            document.getElementsByClassName('tot2')[0].innerText =  quantità + " GIGLI:" ;
            document.getElementsByClassName('prezzo2')[0].innerText =  "$" + totale;
        }

        else {
            document.getElementsByClassName('tot2')[0].innerText = quantità + " GIGLIO:";
            document.getElementsByClassName('prezzo2')[0].innerText =  "$" + totale;
        }
        }

    else {
        document.getElementsByClassName('tot2')[0].innerText = "";
        document.getElementsByClassName('prezzo2')[0].innerText = "";
    }
}


function updatetotale3() {//PREZZO TOTALE DEL TERZO PRODOTTO
    var box = document.getElementsByClassName('quantita')[2];
    var prezzoElemento = box.getElementsByClassName('costo')[0]
    var quanti = box.getElementsByClassName('numero')[0]
    var prezzo = parseFloat(prezzoElemento.innerText.replace("$", ""));
    var quantità = quanti.value
    if (quantità != 0) {
        totale = (prezzo * quantità);
        //SE IL PREZZO HA NUMERI DECIMALI
        totale = Math.round(totale * 100) / 100;
        if (quantità != 1) {
            document.getElementsByClassName('tot3')[0].innerText =  quantità + " MAZZI DI ROSE BIANCHE:" ;
            document.getElementsByClassName('prezzo3')[0].innerText =  totale;
        }
        else {
            document.getElementsByClassName('tot3')[0].innerText = quantità + " MAZZO DI ROSE BIANCHE:";
            document.getElementsByClassName('prezzo3')[0].innerText = "$" + totale;
        }
    }
    else {
        document.getElementsByClassName('tot3')[0].innerText = "";
        document.getElementsByClassName('prezzo3')[0].innerText = "";
    }
}

function updatetotale4() { //PREZZO TOTALE DEL QUARTO PRODOTTO
    var box = document.getElementsByClassName('quantita')[3];
    var prezzoElemento = box.getElementsByClassName('costo')[0]
    var quanti = box.getElementsByClassName('numero')[0]
    var prezzo = parseFloat(prezzoElemento.innerText.replace("$", ""));
    var quantità = quanti.value
    if (quantità != 0) {
        totale = (prezzo * quantità);
        //SE IL PREZZO HA NUMERI DECIMALI
        totale = Math.round(totale * 100) / 100;
        if (quantità != 1) {
            document.getElementsByClassName('tot4')[0].innerText =  quantità + " MAZZI DI FIORI ROSA:" ;
            document.getElementsByClassName('prezzo4')[0].innerText =  totale;
        }
        else {
            document.getElementsByClassName('tot4')[0].innerText = quantità + " MAZZO DI FIORI ROSA:";
            document.getElementsByClassName('prezzo4')[0].innerText = "$" + totale;
        }
    }
    else {
        document.getElementsByClassName('tot4')[0].innerText = "";
        document.getElementsByClassName('prezzo4')[0].innerText = "";
    }
}

function spesacollettiva() { //TOTALE SCONTRINO
    var boxes = document.getElementsByClassName('quantita');
    var totale = 0;
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var prezzoElemento = box.getElementsByClassName('costo')[0]
        var quanti = box.getElementsByClassName('numero')[0]
        var prezzo = parseFloat(prezzoElemento.innerText.replace("$", ""));
        var quantità = quanti.value
        totale = totale + (prezzo * quantità);
        //SE IL PREZZO HA NUMERI DECIMALI
        totale = Math.round(totale * 100) / 100;

        document.getElementsByClassName('prezzototale')[0].innerText = "$" + totale;
    }
}



function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}


