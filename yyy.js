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

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}

function popUp(winURL) {
    window.open(winURL, "popUp", "width=320, height=480");
}



function prepareLinks() {
    if (!document.getElementsByTagName){

        return false;
    }
    var links = document.getElementsByTagName("a");
    for (var  i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popUp") {
            links[i].onclick = function () {
                popUp(this.href);
                return false;
            };
        }
    }
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
    placeholder.setAttribute("src", "images/yyy5.jpg");
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
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);
    //insertAfter(placeholder);
    //insertAfter(description);
}

function addLoadEvent(func){
    
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    } else{
        window.onload=function(){
            oldonload();
            func();
        };
    }
}

function haha() {
    alert ("haha");
}

addLoadEvent(preaprePalceholder);
addLoadEvent(prepareGallery);
//window.onload = preaprePalceholder;
