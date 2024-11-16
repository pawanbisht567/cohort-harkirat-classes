import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
      data: {
          username : "Hello12",
          password : "dwadwarr",
          firstName : "Pawan",
          lastName : "Bisht",
          middleName : "",
          identityNumber : "wdadwad12"
      },
      select : {
        id: true,
        username: true
      }
    })
    console.log(res);
  }
  
insertUser("admin1", "123456", "harkirat", "singh")