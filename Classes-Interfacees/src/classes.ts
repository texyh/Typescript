class Department {
    private static year = 2000;
    static yearly = this.year
    name: string
    constructor(n:string) {
        this.name = n;
    }

    describe() {
        console.log("department: " + this.name)
    }
}

let d = new Department('Acc')
console.log(Department.yearly)
d.describe();
