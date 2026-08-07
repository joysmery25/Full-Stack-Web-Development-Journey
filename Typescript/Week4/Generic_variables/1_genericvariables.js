"use strict";
class LibraryBox {
    item;
    constructor(initialItem) {
        this.item = initialItem;
    }
    getItem() {
        console.log("Fetching item...");
        return this.item;
    }
    updateItem(newItem) {
        this.item = newItem;
        console.log("Item updated successfully.");
    }
}
const bookBox = new LibraryBox("Data Structures");
let book = bookBox.getItem();
console.log(`Current Book: ${book}`);
const marksBox = new LibraryBox(95);
let marks = marksBox.getItem();
console.log(`Marks: ${marks}`);
const studentBox = new LibraryBox({
    name: "Joys Mery",
    cgpa: 8.9
});
const student = studentBox.getItem();
console.log(`Student: ${student.name}`);
console.log(`CGPA: ${student.cgpa}`);
studentBox.updateItem({
    name: "Sai Lakshmi",
    cgpa: 9.4
});
console.log(studentBox.getItem());
