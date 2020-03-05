const Scanner = require("./index.js");
const scanner = new Scanner({
  ip: "192.168.1", // Required
  ports: [80, 21, 22, 554], // Required
  timeout: 2000 // Optional
});

setInterval(() => {
  scanner.start();
}, 1000);

// Discovered devices are emited when the scan finishes
scanner.on("end", devices => {
  console.log(devices);
});
