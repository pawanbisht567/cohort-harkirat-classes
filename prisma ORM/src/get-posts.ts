import prisma from "./db-utils";

async function main() {
  const users = await prisma.post.findMany({});
  console.log(users);
  const user = await prisma.post.findUnique({
    where: {
        id : 1
    },
    include: {
        author: true
    }
  });
  console.log(user);
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })