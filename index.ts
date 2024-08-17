// server.js
import { join } from "path";

const PORT = 3000;

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);

    // Serve the HTML files
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(Bun.file(join(process.cwd(), "src", "index.html")), {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (
      url.pathname === "/confirmation" ||
      url.pathname === "/confirmation.html"
    ) {
      return new Response(
        Bun.file(join(process.cwd(), "src", "confirmation.html")),
        {
          headers: { "Content-Type": "text/html" },
        }
      );
    }
    if (
      url.pathname === "/notifications" ||
      url.pathname === "/notifications.html"
    ) {
      return new Response(
        Bun.file(join(process.cwd(), "src", "notifications.html")),
        {
          headers: { "Content-Type": "text/html" },
        }
      );
    }

    // Serve the CSS files
    if (url.pathname.includes('index.css')) {
      return new Response(Bun.file(join(process.cwd(), "public", "index.css")), {
        headers: { "Content-Type": "text/css" },
      });
    }
    if (url.pathname.includes('confirmation.css')) {
      return new Response(Bun.file(join(process.cwd(), "public", "confirmation.css")), {
        headers: { "Content-Type": "text/css" },
      });
    }
    if (url.pathname.includes('notifications.css')) {
      return new Response(Bun.file(join(process.cwd(), "public", "notifications.css")), {
        headers: { "Content-Type": "text/css" },
      });
    }

    // Serve 404 for any other files
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${PORT}`);
