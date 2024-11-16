// Problem that TSC can infer the return type of method
type args = string | number;
function random(args: args[]) {
    return args[0];
}

let r1 = random(["2", "1"]);
// parseInt(r1); // Problems cant tyoe infer

let r2 = random(["Pawan"]);
// r2.charAt(2) // Problems cant tyoe infer


//Generics
function sum<T> (a: T[]) {
    return a[0];
}

interface Usertemp {
    name: string;
    age: number;
}

let a = sum<string>(['pawan']);
let b = sum<number>([1]);
a.charAt(1);


let c = sum<(string | number)> (['pokemon', 1])


function print<T>(args: T)  {
    return args;
}

let u = print<Usertemp>({ name: 'Bisht', age:29});
