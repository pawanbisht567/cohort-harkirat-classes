import { Hono } from 'hono';
// Initialize the Hono class just like we iniitalize the Express app.
export const app = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    }
  }>();