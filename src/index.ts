import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(
    cors({
      origin: "*",
    })
  )
  .get("/", () => ({
    greeting: "Hello, from the server!",
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
