import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            username: username
        },
      })
      console.log(res);
}
getUser('Hello123')