"use strict";
var core;
(function (core) {
    class Contact {
        constructor(firstName = "", lastName = "", contactNumber = "", emailAddress = "", message = "") {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;
            this.Message = message;
        }
        get FirstName() {
            return this.m_firstName;
        }
        set FirstName(value) {
            this.m_firstName = value;
        }
        get LastName() {
            return this.m_firstName;
        }
        set LastName(value) {
            this.m_firstName = value;
        }
        get ContactNumber() {
            return this.m_contactNumber;
        }
        set ContactNumber(value) {
            this.m_contactNumber = value;
        }
        get EmailAddress() {
            return this.m_emailAddress;
        }
        set EmailAddress(value) {
            this.m_emailAddress = value;
        }
        get Message() {
            return this.m_message;
        }
        set Message(value) {
            this.m_message = value;
        }
        toString() {
            return `Full Name     : ${this.FirstName} ${this.LastName} \nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}  Message: ${this.Message}`;
        }
        toJSON() {
            return {
                "FirstName": this.FirstName,
                "LastName": this.LastName,
                "ContactNumber": this.ContactNumber,
                "EmailAddress": this.EmailAddress,
                "Message": this.Message
            };
        }
        fromJSON(data) {
            this.FirstName = data.FirstName;
            this.LastName = data.LastName;
            this.ContactNumber = data.ContactNumber;
            this.EmailAddress = data.EmailAddress;
            this.Message = data.Message;
        }
        serialize() {
            if (this.FirstName !== "" && this.LastName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return `${this.FirstName},${this.LastName},${this.ContactNumber},${this.EmailAddress},${this.Message}`;
            }
            else {
                console.error("One or more properties of the Contact is empty");
                return null;
            }
        }
        deserialize(data) {
            let propertyArray = data.split(",");
            this.FirstName = propertyArray[0];
            this.LastName = propertyArray[1];
            this.ContactNumber = propertyArray[2];
            this.EmailAddress = propertyArray[3];
        }
    }
    core.Contact = Contact;
})(core || (core = {}));
//# sourceMappingURL=contact.js.map