function validate(formularz) {
    var test = 0;
    test += checkStringAndFocus(formularz.elements["f_imie"], "Podaj imię!\n", isWhiteSpaceOrEmpty, test);
    test += checkStringAndFocus(formularz.elements["f_nazwisko"], "Podaj nazwisko!\n", isWhiteSpaceOrEmpty, test);
    test += checkStringAndFocus(formularz.elements["f_email"], "Podaj właściwy e-mail!\n",isEmailInvalid, test);
    test += checkStringAndFocus(formularz.elements["f_kod"], "Podaj kod!\n", isWhiteSpaceOrEmpty, test);
    test += checkStringAndFocus(formularz.elements["f_ulica"], "Podaj ulicę!\n", isWhiteSpaceOrEmpty, test);
    test += checkStringAndFocus(formularz.elements["f_miasto"], "Podaj miasto!\n", isWhiteSpaceOrEmpty, test);
    if(test==0) {
        return true;
    }
    else{
        return false;
    }

}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function isEmailInvalid(str) {
    var email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return false;
    else {
        return true;
    }
}

function checkStringAndFocus(obj, msg, func, test) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (func(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        if(test==0)
            obj.focus();
        return true;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return false;
    }
}

function showElement(e) {
    for (var i = 0; i < document.getElementById(e).childElementCount; i++) {
        document.getElementById(e).children[i].disabled = false;
    }
}
function hideElement(e) {
    for (var i = 0; i < document.getElementById(e).childElementCount; i++) {
        document.getElementById(e).children[i].disabled = true;
    }
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    var tab = prevNode(b.previousSibling);
    var tBody = nextNode(tab.firstChild);
    var lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    var firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

