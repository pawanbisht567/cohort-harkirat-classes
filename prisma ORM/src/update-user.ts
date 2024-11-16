import prisma from "./db-utils";

async function main() {
  const users = await prisma.user.update({
    where: {
        id: 1
    },
    data: {
        email: 'humanji@gmail.com',
        name: 'JAI SHREE RAM'
    }
  });
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