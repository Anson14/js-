function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    //var defs = new Array();
    var defs = [];
    var dlist =  document.createElement("dl");
    var flag = false;

    for (var i = 0; i < abbreviations.length; i++) {
        //为了支持平稳退化，所以必须要检测是否真的有child
        //childnodes返回节点的子节点集合
        if (abbreviations[i].childNodes.length < 1) continue;


        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        flag = true;

        //defs[key] = definition;


        var dtitle = document.createElement("dt");
        var ddesc = document.createElement("dd");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (!flag) {
        return false;
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(dlist);
}

function displaycitations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quotesElements = quotes[i].getElementsByTagName("*");
        if (quotesElements.length <1) continue;
        var elem = quotesElements[quotesElements.length-1];
        var link = document.createElement("a");
        link.setAttribute("href", url);
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

//window.onload = displayAbbreviations;
addLoadEvent(displayAbbreviations);
addLoadEvent(displaycitations);
