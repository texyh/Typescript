type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date
}

const emp = {
    name: 'test',
    privileges: ['testing']
}

type ElevatedEmployee = Admin & Employee // union
type UnknownEmployee = Admin | Employee // interception

function printEmployee(emp : UnknownEmployee) {
    console.log('name: ' + emp.name)

    if('privileges' in emp) {
         console.log('priveleges: ' + emp.privileges)
    }

    if('startDate' in emp) {
        console.log('startDate : ' + emp.startDate)
   }
}


//printEmployee(emp)


class Car {
    drive() {
        console.log('driving')
    }
}


class Truck {
    drive() {
        console.log('driving')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo....' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}


useVehicle(v1)
useVehicle(v2)
