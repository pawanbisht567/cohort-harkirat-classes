interface UserInfo {
    name: string,
    age: number;
    email: string;
    password: string;
    id: string;
}

// What if we want to only 3 properties from above then we need to create a new interface, with only 3 properties like name , name, email.
// But into that developer made some mistake to types or in typo error

type UserProfile = Pick<UserInfo, 'name' | 'age' | 'email'>;

function show(user: UserProfile): void {
    console.log(user.age, user.email, user.name)
}

show({email: '@gmail.com', age: 13, name:'Pawan'})