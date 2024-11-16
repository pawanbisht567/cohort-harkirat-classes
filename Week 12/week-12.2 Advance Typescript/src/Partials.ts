/**
 * Partials also works like Pick but used to create a new type by making all properties of an existing type optional.
 */

interface UserPartial {
    name: string,
    age: number;
    email: string;
    password: string;
    id: string;
}

type UserPickProfile = Pick<UserPartial, 'name' | 'age' | 'email'>;
type UserPartialProfile = Partial<UserPickProfile>;

function showPartials(user: UserPartialProfile): void {
    console.log(user?.age, user?.email, user?.name)
}

showPartials({email: '@gmail.com'})