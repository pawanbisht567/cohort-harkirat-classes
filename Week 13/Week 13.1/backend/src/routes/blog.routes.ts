import { Hono } from 'hono';
import { decode, sign, verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { createBlogInput, updateBlogInput } from '@pawan16/medium-common';

// Initialize the Hono class just like we iniitalize the Express app.
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  }
}>();


blogRouter.use(async(c, next) => {
  try {
    const headers = c.req.header("authorization") || "";
    const token = headers.split(" ")[1]; 
    const response = await verify(token, c.env.JWT_SECRET);
    if(!response.id) {
      c.status(401);
      return c.json({ msg : "Authorization Failed"})
    }
    console.log(response)
    c.set('userId', response.id as string);
    console.log(c.get('userId'));
    await next()
  } catch (e) {
      c.status(401);
      return c.json({ msg : "Authorization Failed" })
    }
  
})
// POST /api/v1/blog
blogRouter.post('/', async (c) => {
    /**
     * This 'c' variable is context variable, having request, response, and environment variable.
     */
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const { success, error } = createBlogInput.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
          message: "Inputs are invalid"
        })
    }
    try {
          const blog = await prisma.post.create({
              data: {
                  title: body.title,
                  content: body.content,
                  published: body.published,
                  authorId: c.get('userId')
              }
          });
          c.status(201)
          return c.json({ message: "Post Saved Successfully", blog })
      } catch(e) {
          c.status(403);
          return c.json({ msg : e})
      }
  })
  
  // PUT /api/v1/blog
  blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const { success, error } = updateBlogInput.safeParse(body);
    try {
      if(!success) {
        c.status(411)
        return c.json({
          message: "Inputs are invalid"
        })
    }
        const blog = await prisma.post.update({
          where:{
            id: body.id
          },
          data: {
                title: body.title,
                content: body.content,
            }
          });
        c.status(200)
        return c.json({ message: "Post Updated Successfully", blog })
      } catch(e) {
          c.status(403);
          return c.json({ msg : e})
      }
  })

    // GET /api/v1/blog/bulk
    blogRouter.get('/bulk', async(c) => {
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      try {
            const blogs = await prisma.post.findMany();
            c.status(200)
            return c.json({ posts: blogs })
        } catch(e) {
            c.status(403);
            return c.json({ msg : e})
        }
    })
  
  // GET /api/v1/blog/:id
  blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const id = c.req.param('id');
    console.log(id);
  
    try {
          const blog = await prisma.post.findFirst({
            where:{
              id: id
          }
        });
          c.status(200)
          return c.json({ blog })
      } catch(e) {
          c.status(403);
          return c.json({ msg : e})
      }
  })
  

  
  blogRouter.notFound((c) => {
    return c.text("Not found 404!!!")
  })