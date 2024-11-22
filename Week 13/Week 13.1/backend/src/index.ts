
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt'
import { app } from './utility/hono';
import { userRouter } from "./routes/user.routes";
import { blogRouter } from "./routes/blog.routes";
// Blog Middleware

app.route('/api/v1/user', userRouter );
app.route('/api/v1/blog', blogRouter );



app.notFound((c) => {
  c.status(404);
  return c.text("404 Page Not Found!!")
}) 


export default app
