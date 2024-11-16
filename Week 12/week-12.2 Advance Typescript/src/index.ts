interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: 'Pawan', age: 29}, { name: 'Tarun', age: 29});
console.log(age)