function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
	};
  }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my images gallery");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var txt = document.createTextNode("choose an image");
    description.appendChild(txt);

    var gallery = document.getElementById("imagegallery");
    //使用insertBefore()来实现插入元素。
    //gallery.parentNode.insertBefore(placeholder,gallery); 
    //gallery.parentNode.insertBefore(description,gallery); 
    
    //使用appendChild()来将元素插入。
    //var body = document.getElementsByTagName("body");
    //body[0].appendChild(placeholder);
    //body[0].appendChild(description);
    
    //使用刚刚撰写的函数insertAfter()实现上述插入插入元素。
    insertAfter(description,gallery);
    insertAfter(placeholder, gallery);
   
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    };
  }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
