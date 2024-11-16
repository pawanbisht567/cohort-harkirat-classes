interface User {
    firstName: string;
    lastName: string;
    age: number;
    DOB?: string;
    salary: number[]
}

function greeting(user: User) {
    console.log(user);
    // return "";
}

greeting({firstName: "", lastName:"", age:17, DOB: "", salary:[1,2,3] })


interface Person {
    name:string;
    age: number;
    greet(phrase:string) :void;
}

class Employee implements Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log("Hello ", phrase);
    }
}

let emp = new Employee('rajat', 26)
console.log(emp);