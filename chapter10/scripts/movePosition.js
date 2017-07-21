function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    //elem.style.position = "static";
    //elem.style.position = "relative";
    //elem.style.position = "fixed";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveMessage("message", 125, 25, 20);
    if (!document.getElementById("message2")) return false;
    alert("hhhhhaaaaa");
    var elem2 = document.getElementById("message2");
    elem2.style.position = "absolute";
    elem2.style.left = "50px";
    elem2.style.top = "50px";
    moveMessage("message2", 125,125,20);

}

function moveMessage(elementId, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    var elem = document.getElementById(elementId);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    } 
    if (ypos < final_y) {
        ypos++;
    }
    if (xpos > final_x) {
        xpos--;
    } 
    if (ypos > final_y) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveMessage('"+elementId+"', "+final_x+", "+final_y+", "+interval+")";
    var movement = setTimeout(repeat, interval);
}

addLoadEvent(positionMessage);
//addLoadEvent(moveMessage);
//window.onload = positionMessage;
