type numArray = number[];
// function maxSum(arr: number[]) {
function maxSum(arr: numArray) {
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum+=arr[i];
    }
    console.log(sum)
    return sum;
}

interface UserCal {
    name?:string;
    age: number;
}

function addAge(users: UserCal[]) {
    let sum = 0;
    for(let i=0;i<users.length;i++) {
        sum+=users[i].age;
    }
    console.log(sum)
    return sum;
}
addAge([{age:17},{age:17},{age:17}])

maxSum([2,3,4]);