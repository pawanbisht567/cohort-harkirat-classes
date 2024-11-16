type UserRecord = {
    name: string;
    age: number;
  }
  
  type Users = Record<string, User>;
  
  let us: Users = {
    "raman": { name: "dawwatt", age: 23 },
    "goti": { name:  "sharma",  age: 23 },
  }
  
  console.log(us)