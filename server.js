// Plain Node.js entry point for production, used by PM2 instead of
// shelling out to the `next` CLI. That wrapper script
// (node_modules/.bin/next) can be an npm-generated shell shim rather
// than plain JS, and PM2's fork container tries to require() it
// directly - crashing with a syntax error before any real code runs.
// This file is genuinely plain CommonJS, so there's no wrapper for
// PM2 to misinterpret, regardless of how npm generated the bin shims
// on whatever machine this runs on.
const { createServer } = require("node:http");
const next = require("next");

const port = parseInt(process.env.PORT || "3002", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
