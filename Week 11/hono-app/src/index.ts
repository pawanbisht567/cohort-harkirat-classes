import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any) {
  console.log('Auth middleware');
  next();
}

app.use(authMiddleware);
app.get('/', async (c) => {
  return c.text("Wrangler Saying Hi from Hono")
})

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("parameter"));

  return  c.json({
    name: 'Vikas'
  })
})

export default app
