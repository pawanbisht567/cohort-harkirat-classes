import prisma from "./db-utils";

async function main() {
  const post = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'The content of First Post',
      published : true,
      author: {
        connect :{
            id: 2
        }
      }
    },
  })
  console.log(post)
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