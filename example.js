const Scanner = require("./lan-scan");
const scanner = new Scanner({
  ip: "192.168.1", // Required
  ports: [80, 21, 22, 554, 5084, 443, 25, 23, 3389], // Required
  timeout: 2000 // Optional
});

scanner.start(3000); // You may specify an interval
scanner.on("device", device => console.log(device));
