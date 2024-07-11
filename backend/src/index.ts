import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config";
import { csrf } from "hono/csrf";
import {cors} from 'hono/cors'

const app = new Hono().basePath('/cyber_eyes');
app.use(csrf()); //prevents CSRF attacks by checking request headers.
app.use(cors()) //allows cross-origin requests


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000
console.log(`Server is running on port ${port}`)


serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
});
console.log(`Server is running on port ${process.env.PORT}`);

