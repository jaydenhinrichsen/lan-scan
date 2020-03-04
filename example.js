const Scanner = require("./index.js");
const scanner = new Scanner({
  ip: "192.168.1", // Required
  ports: [80, 21, 22, 554], // Required
  timeout: 2000 // Optional
});

setInterval(() => {
  scanner.scan();
}, 4000);

scanner.on("end", devices => {
  devices.forEach(device => {
    if (!device.find(port => port === 554)) {
      console.log(device);
    }
  });
  console.log(devices);
});
