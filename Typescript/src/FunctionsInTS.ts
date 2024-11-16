function greet(firstName: string, age?: number): string {
    return "Hello " + firstName; 
}
console.log(greet("Pawan"))


function sum(firstNumber: number, secondNumber: number):number {
    return firstNumber + secondNumber;
}

console.log(2,3)

function isLeagal(age: number) : Boolean {
    if(age>18) 
        return true;
    else
        return false;
}
console.log(isLeagal(19));

function showMessage(): void {
    console.log('Hello, world!');
    // This function does not return any value, so its return type is void
}

showMessage(); // Calling the function, it logs 'Hello, world!' to the console
