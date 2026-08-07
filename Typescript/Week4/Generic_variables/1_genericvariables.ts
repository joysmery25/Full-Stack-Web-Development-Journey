export {};

class GenericLibraryBox<T> {
    private item: T;
    constructor(initialItem: T) {
        this.item = initialItem;
    }
    public getItem(): T {
        console.log("Fetching item...");
        return this.item;
    }
    public updateItem(newItem: T): void {
        this.item = newItem;
        console.log("Item updated successfully.");
    }
}
const bookBox = new GenericLibraryBox<string>("Data Structures");
let book = bookBox.getItem();
console.log(`Current Book: ${book}`);

const marksBox = new GenericLibraryBox<number>(95);
let marks = marksBox.getItem();
console.log(`Marks: ${marks}`);

interface Student {
    name: string;
    cgpa: number;
    rollNo: string;
    display(): string;
}

const studentBox = new GenericLibraryBox<Student>({
    name: "Joys Mery",
    cgpa: 8.9,
    rollNo: "24B01A4273",
    display() {
        return this.name;
    }
});

const studentInfo = studentBox.getItem();
console.log(`Student: ${studentInfo.name}`);
console.log(`CGPA: ${studentInfo.cgpa}`);

studentBox.updateItem({
    name: "Sai Lakshmi",
    cgpa: 9.4,
    rollNo: "24B01A4274",
    display() {
        return this.name;
    }
});

console.log(studentBox.getItem());