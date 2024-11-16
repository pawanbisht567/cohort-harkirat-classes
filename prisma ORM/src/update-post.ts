import prisma from "./db-utils";

async function main() {
  const postupdate = await prisma.post.updateMany({
    where: {
        id: 3
    },
    data: {
        published: false
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