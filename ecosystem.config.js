// PM2 process file for this project on the VPS.
// Start (first time):    pm2 start ecosystem.config.js
// Restart (every deploy after a rebuild): pm2 restart brave-education-uk
//
// IMPORTANT: PORT below must not collide with the BD site (3001) or
// anything else already running on this box - check with `ss -tlnp`
// first. Also double check the `name` is unique so `pm2 list` doesn't
// get confusing with two apps sharing a name.
module.exports = {
  apps: [
    {
      name: "brave-education-uk",
      script: "./server.js",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: 3002, // <-- change to whatever free port you picked
      },
      instances: 1,
      exec_mode: "fork", // PM2 defaults to cluster mode whenever `instances`
      // is set unless this is explicit - don't cluster
      // a Next.js app that isn't built to share state
      // across worker processes.
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
