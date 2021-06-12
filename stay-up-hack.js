const execSync = require("child_process").execSync;
execSync("npx http-server build -p 3000 -c-1");

process.on("beforeExit", code => {
  execSync("refresh");
});

process.on("exit", code => {
  execSync("refresh");
});