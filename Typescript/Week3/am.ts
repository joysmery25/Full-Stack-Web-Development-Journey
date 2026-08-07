class EmployeeRecord {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    displayEmployee(): void {
        console.log("Employee:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

const employee = new EmployeeRecord("Joys Mery", 60000, "AI");
employee.displayEmployee();
console.log(employee.name);