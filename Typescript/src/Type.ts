type GreetArg = number | string | boolean;
type Users = {
    firstName: string;
    lastName: string;
    age: number;
}

interface Employees  {
    name: string;
    startDate: Date;
  }
  
interface Manager  {
    name: string;
    department: string;
  }
  
  type TeamLead = Employees & Manager;
  
  let teamLead: TeamLead = {
    name: "Harkirat",
    startDate : new Date(),
    department: ""
  };

function greetNew(msg : GreetArg) : void {
    console.log(msg);
}

greetNew(1)
