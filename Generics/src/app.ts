// const names: Array<string> = [];


function merge<T extends object, U>(objA:T, objB:U)  {
    return Object.assign(objA, objB);
}

// const newLocal = merge({ name: 'texy' }, { age: 30 });
// console.log(newLocal);


function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U) {
    return obj[key]
}

extractAndConvert({name : 'texy'}, 'name')

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

interface CourseGoal {
    title: string;
    descr: string;
    completeUntil: Date
}


function createCourseGaol(title: string, descr: string, completeUntil: Date): CourseGoal {
    let goal: Partial<CourseGoal> = {};
    goal.title = title;
    goal.descr = descr;
    goal.completeUntil = completeUntil;


    return goal as CourseGoal;
}

const names: Readonly<string[]> = ['max', 'test']
//names.push("cooking")

function allToString<T>(obj: T): Record<keyof T, string> {
    let transfer: Partial<Record<keyof T, string>> = {};
    for (let key in obj) {
        transfer[key] = `${obj[key]}`;
    }
    return transfer as Record<keyof T, string>;
}

const person = {
    firstName: 'Stefan',
    lastName: 'Baumgartner',
    age: Number.MAX_VALUE
}

type Person = typeof person;

const strPerson = console.log(allToString(person));
