function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName +=  value;
        element.className = newClassName;
    }
}


function highlightpage() {
    if(!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;

    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute("href");
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext);
        }
    }
}

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("intro")) return false;
    var intro = document.getElementById('intro');
    var slidshow = document.createElement("div");
    slidshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "./images/slideshow.gif");
    preview.setAttribute("id", "preview");
    preview.setAttribute("alt", "a glimpse of what awaits you");
    slidshow.appendChild(preview);
    insertAfter(slidshow, intro);

    var frame = document.createElement("img");
    frame.setAttribute("src", "images/frame.gif");
    frame.setAttribute("alt", " ");
    frame.setAttribute("id", "frame");
    slidshow.appendChild(frame);

    //装逼开始
    //var links = intro.getElementsByTagName("a");
    var links  = document.getElementsByTagName("a");
    var destination;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function() {
            destination = this.getAttribute("href");
            if (destination.indexOf("index.html") != -1) {
                moveElement("preview", 0, 0, 5);
            }
            if (destination.indexOf("about.html") != -1) {
                moveElement("preview", -150, 0, 5);
            }
            if (destination.indexOf("photos.html") != -1) {
                moveElement("preview", -300, 0, 5);
            }
            if (destination.indexOf("live.html") != -1) {
                moveElement("preview", -450, 0, 5);
            }
            if (destination.indexOf("contact.html") != -1) {
                moveElement("preview", -600, 0, 5);
            }
        };
    }
}


function showSection(id) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute("id") != id) {
            sections[i].style.display = "none";
        } else {
            sections[i].style.display = "block";
        }
    }
}

function prepareInternalnav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var articls = document.getElementsByTagName("article");
    if (articls.length == 0) return false;
    var navs = articls[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var sectionId = links[i].getAttribute("href").split("#")[1];
        links[i].destination = sectionId;
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        links[i].onclick = function() {
            showSection(this.destination);
            return false;
        };
    }
}


function showPic (whichpic) {
    //alert("hah");
    if (!document.getElementById("description")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        var text = whichpic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }
    return true;
}

function prepareGallery() {
    //alert("hah");
    if (!document.getElementsByTagName || !document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        };
        //links[i].onkeypress = links[i].onclick;

    }
}

function preaprePalceholder() {
    //alert("hah");
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    placeholder.setAttribute("height", "400");
    placeholder.setAttribute("windth", "300");
    //alert("hah");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var txt = document.createTextNode("Chose an image");
    description.appendChild(txt);
    //document.getElementsByTagName("body")[0].appendChild(placeholder);
    //document.getElementsByTagName("body")[0].appendChild(description);
    var gallery = document.getElementById("imagegallery");
    //gallery.parentNode.insertBefore(placeholder,gallery);
    //gallery.parentNode.insertBefore(description,gallery);
    insertAfter(placeholder, gallery);
    insertAfter(description, gallery);
}

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (var i=0; i<tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j=0; j<rows.length; j++) {
            if (odd == true) {
                addClass(rows[j],"odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i=0; i<rows.length; i++) {
        rows[i].oldclassname = rows[i].className;
        rows[i].onmouseover = function() {
            //this.style.fontWeight = "bold";
            addClass(this, "highlight");
        };
        rows[i].onmouseout = function() {
            //this.style.fontWeight = "normal";
            this.className = this.oldclassname;
        }
    }
}


function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // get all the abbreviations
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    // loop through the abbreviations
    for (var i=0; i<abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    // create the definition list
    var dlist = document.createElement("dl");
    // loop through the definitions
    for (key in defs) {
        var definition = defs[key];
        // create the definition title
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        // create the definition description
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        // add them to the definition list
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    // create a headline
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    var container = articles[0];
    container.appendChild(header);
    container.appendChild(dlist);
    // add the headline to the body
    //document.body.appendChild(header);
    // add the definition list to the body
    //document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(highlightRows);
addLoadEvent(stripeTables);
addLoadEvent(highlightpage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(prepareGallery);
addLoadEvent(preaprePalceholder);
