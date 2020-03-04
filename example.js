const Scanner = require("./index.js");
const scanner = new Scanner({
  ip: "192.168.43", // Required
  ports: [80, 21, 22, 554], // Required
  timeout: 2000 // Optional
});

scanner.start(3000); // You may specify an interval
scanner.on("device", device => console.log(device));
