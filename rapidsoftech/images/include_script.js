var rootdomain = "http://" + window.location.hostname
var contactMsg = "";
var contactMsgWrong = "";
function ajaxinclude(url) {
    var page_request = false
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject) { // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
            try {
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) { }
        }
    }
    else
        return false
    page_request.open('GET', url, false) //get page synchronously 
    page_request.send(null)
    writecontent(page_request)
}

function writecontent(page_request) {
    if (window.location.href.indexOf("http") == -1 || page_request.status == 200)
        document.write(page_request.responseText)
}

function validateQuote() {
    contactMsg = "Data is missing on required field(s). Select OK to return to the screen and complete the required fields." + '\n\n';
    if (!validateQuoteRequired()) {
        alert(contactMsg);
        return false;
    }
    else {
        contactMsgWrong = "Data in some of the field(s) looks invalid. Select OK to return to the screen and correct the fields data." + '\n\n';
        if (!validateQuoteData()) {
            alert(contactMsgWrong);
            return false;
        }   
    }
}

function validateQuoteData() {
    isValid = true;
    
    isValid = validateContactData();
    
    if (!isValidUrl()) {
        contactMsgWrong = contactMsgWrong + "The Website you entered does not appear to be valid." + '\n';
        if (isValid) {
            isValid = false;
        }
        return isValid
    }
}

function validateQuoteRequired() {
//    if (!validateContactRequired()) {
//        return false;
//    }
//    else {
        isValid = true;
        isValid = validateContactRequired();

        var seRequest = document.getElementById('seRequest');
        var valueRequest = seRequest.selectedIndex;//seRequest.options[seRequest.selectedIndex].value;
        var seHear = document.getElementById('seHear');
        var valueHear = seHear.selectedIndex;

        if (valueRequest < 1) {
            contactMsg = contactMsg + "Select the Request for field data." + '\n';
            isValid = false;
        }

        if (valueHear < 1) {
            contactMsg = contactMsg + "Select the Hear About Us field data." + '\n';
            if (isValid) {
                isValid = false;
            }
        }
        return isValid;
//    }
}

function validateContact() {
    contactMsg = "Data is missing on required field(s). Select OK to return to the screen and complete the required fields." + '\n\n';
    if (!validateContactRequired()) {
        alert(contactMsg);
        return false;
    }
    else {
        contactMsgWrong = "Data in some of the field(s) looks invalid. Select OK to return to the screen and correct the fields data." + '\n\n';
        if (!validateContactData()) {
            alert(contactMsgWrong);
            return false;
        }
    }
}

function validateContactData() {
    isValid = true;
    
    if (!isWholeNum()) {
        contactMsgWrong = contactMsgWrong + "The Phone Number you entered does not appear to be valid." + '\n';
        isValid = false;
    }

    if (!isValidEmail()) {
        contactMsgWrong = contactMsgWrong + "The Email you entered does not appear to be valid." + '\n';
        if (isValid) {
            isValid = false;
        }
    }
    if (!isNonNum()) {
        contactMsgWrong = contactMsgWrong + "The Name you entered does not appear to be valid." + '\n';
        if (isValid) {
            isValid = false;
        }
    }
    return isValid
}

function validateContactRequired() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var comment = document.getElementById('details').value;

    isValid = true;

    if (name == "") {
        contactMsg = contactMsg + "Enter the Name field data." + '\n';
        isValid = false;
    }

    if (phone == "") {
        contactMsg = contactMsg + "Enter the Phone Number field data." + '\n';
        if (isValid) {
            isValid = false;
        }
    }

    if (email == "") {
        contactMsg = contactMsg + "Enter the Email field data." + '\n';
        if (isValid) {
            isValid = false;
        }
    }

    if (subject == "") {
        contactMsg = contactMsg + "Enter the Subject field data." + '\n';
        if (isValid) {
            isValid = false;
        }
    }

    if (comment == "") {
        contactMsg = contactMsg + "Enter the Details field data." + '\n';
        if (isValid) {
            isValid = false;
        }
    }
    return isValid;
}

function isWholeNum() {
    var whNumReg = /^((-?\d+\.?)|(-?\d*\.\d+))$/;
    var phone = document.getElementById('phone').value;
    if (!whNumReg.test(phone)) {
        return false;
    }
    return true;
}

function isNonNum() {
    var whNumReg = /^[a-zA-Z][a-zA-Z\s]+$/;
    //var whNumReg = /^[A-Za-z\d\s]+$/;
    var name = document.getElementById('name').value;
    if (!whNumReg.test(name)) {
        return false;
    }
    return true;
}

function isValidEmail() {
    var whEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var email = document.getElementById('email').value;
    if (!whEmail.test(email)) {
        return false;
    }
    return true;
}

function isValidUrl() {
    //var whSite = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var whSite = /^((http:\/\/www\.)|(www\.)|(http:\/\/))[a-zA-Z0-9._-]+\.[a-zA-Z.]{2,5}$/;
    var website = document.getElementById('website').value;
    if (website != "") {
        if (!whSite.test(website)) {
            return false;
        }
    }
    return true;
}