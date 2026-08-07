"use strict";
var CollegeID;
(function (CollegeID) {
    const rollNumberLength = 10;
    function validateRollNumber(id) {
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === rollNumberLength;
    }
    CollegeID.validateRollNumber = validateRollNumber;
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@college\.edu$/;
        return emailRegex.test(email);
    }
    CollegeID.validateEmail = validateEmail;
    let Fees;
    (function (Fees) {
        function calculateLibraryFine(days) {
            return days * 5;
        }
        Fees.calculateLibraryFine = calculateLibraryFine;
    })(Fees = CollegeID.Fees || (CollegeID.Fees = {}));
})(CollegeID || (CollegeID = {}));
const myRollNumber = "24B01A4273";
const myEmail = "24b01a4273@svecw.edu.in";
console.log(`Is Roll Number Valid? ${CollegeID.validateRollNumber(myRollNumber)}`);
console.log(`Is Email Valid? ${CollegeID.validateEmail(myEmail)}`);
const overdueDays = 8;
const fine = CollegeID.Fees.calculateLibraryFine(overdueDays);
console.log(`Library Fine for ${overdueDays} days is ₹${fine}`);
