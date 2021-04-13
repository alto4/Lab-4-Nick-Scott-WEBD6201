"use strict";
var core;
(function (core) {
    function testFirstName() {
        let messageArea = $("#messageArea").hide();
        let firstNamePattern = /([A-Z][a-z]{1,25})/;
        $("#firstName").on("blur", function () {
            if (!firstNamePattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid First Name.");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testLastName() {
        let messageArea = $("#messageArea").hide();
        let lastNamePattern = /([A-Z][a-z]{1,25})/;
        $("#lastName").on("blur", function () {
            if (!lastNamePattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Last Name.");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testContactNumber() {
        let messageArea = $("#messageArea");
        let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        $("#contactNumber").on("blur", function () {
            if (!contactNumberPattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testEmailAddress() {
        let messageArea = $("#messageArea");
        let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        $("#emailAddress").on("blur", function () {
            if (!emailAddressPattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function formValidation() {
        testFirstName();
        testLastName();
        testContactNumber();
        testEmailAddress();
    }
    function displayContact() {
        formValidation();
        $("#sendButton").on("click", (event) => {
            let subscribeCheckbox = $("#subscribeCheckbox")[0];
            let firstName = $("#firstName")[0];
            let lastName = $("#lastName")[0];
            let contactNumber = $("#contactNumber")[0];
            let emailAddress = $("#emailAddress")[0];
            let message = $("#message")[0];
            if (subscribeCheckbox.checked) {
                let contact = new core.Contact(firstName.value, lastName.value, contactNumber.value, emailAddress.value, message.value);
                console.log(contact.toString());
                if (contact.serialize()) {
                    let key = contact.FirstName.substring(0, 1) + Date.now();
                    localStorage.setItem(key, contact.serialize());
                }
            }
            location.href = '/';
        });
    }
    function displayContactList() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = '/contact-list';
            }
        });
    }
    function displayEdit() {
        formValidation();
    }
    function displayLogin() {
    }
    function displayRegister() {
    }
    function Start() {
        let pageID = $("body")[0].getAttribute("id");
        switch (pageID) {
            case 'edit':
                displayEdit();
                break;
            case 'contact':
                displayContact();
                break;
            case 'login':
                displayLogin();
                break;
            case 'register':
                displayRegister();
                break;
            case 'contact-list':
                displayContactList();
                break;
        }
    }
    window.addEventListener("load", Start);
})(core || (core = {}));
//# sourceMappingURL=app.js.map