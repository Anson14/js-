function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

function try_innerHTML() {
    var testdiv = document.getElementById("testdiv");
    alert (testdiv.innerHTML);
    testdiv.innerHTML = "<p>I insterted <em>this</em> content.</p>";
    alert(testdiv.innerHTML);
}

function try_creamElement() {
    var para = document.createElement("p");
    var info = "nodeName: ";
    info += para.nodeName;
    info += "  nodeType: ";
    info += para.nodeType;
    alert(info);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("This is ");    //这里有一个很奇怪的东西，在innerHTML里面我可以使用<em>这样的标签并可以成功转意，但是如过用在creatTextNode里面就不行了
    para.appendChild(txt);
    var para2 = document.createElement("em");
    txt = document.createTextNode("my");
    para2.appendChild(txt);
    para.appendChild(para2);
    txt = document.createTextNode(" insterted");
    para.appendChild(txt);
}

window.onload = try_creamElement;
