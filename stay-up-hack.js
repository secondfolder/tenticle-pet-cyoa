const execSync = require("child_process").execSync;
execSync("npx http-server build -p 3000 -c60 --gzip --proxy http://localhost:${PORT}?");

process.on("beforeExit", code => {
  execSync("refresh");
});

process.on("exit", code => {
  execSync("refresh");
});