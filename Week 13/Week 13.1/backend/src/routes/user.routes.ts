import { Hono } from 'hono';
import { decode, sign, verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';

// Initialize the Hono class just like we iniitalize the Express app.
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

// POST /api/v1/user/signup
userRouter.post('/signup', async (c) => {
    
    /**
     * This 'c' variable is context variable, having request, response, and environment variable.
     */
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    try {
          const user = await prisma.user.create({
              data: {
                  email: body.email,
                  password: body.password,
          name: body.name
              }
          });
      
      const token = await sign({ id: user.id}, c.env.JWT_SECRET);
          return c.json({ token : token, message: "Signup" })
      } catch(e) {
           c.status(403);
       console.log(e)
       return c.json({ msg : e})
      }
  })

// POST /api/v1/user/signin
userRouter.post('/signin', async (c) => {
  console.log('awdawd')
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });
  
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    console.log(user);
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  })  

