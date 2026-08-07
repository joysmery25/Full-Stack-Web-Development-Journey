export {};

namespace CollegeInfo {
    const rollNumberLength = 10;
    export function validateRollNumber(id: string): boolean {
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === rollNumberLength;
    }
    export function validateEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@college\.edu$/;
        return emailRegex.test(email);
    }
    export namespace Fees {
        export function calculateLibraryFine(days: number): number {
            return days * 5;
        }
    }
}
const studentRollNumber = "24B01A4273";
const myEmail = "24b01a4273@svecw.edu.in";
console.log(`Is Roll Number Valid? ${CollegeInfo.validateRollNumber(studentRollNumber)}`);
console.log(`Is Email Valid? ${CollegeInfo.validateEmail(myEmail)}`);
const libraryOverdueDays = 8;
const fine = CollegeInfo.Fees.calculateLibraryFine(libraryOverdueDays);
console.log(`Library Fine for ${libraryOverdueDays} days is ₹${fine}`);