const Scanner = require("./index.js");
const scanner = new Scanner({
  ip: "192.168.43", // Required
  ports: [80, 21, 22, 554], // Required
  timeout: 2000 // Optional
});

setInterval(() => {
  scanner.scan();
}, 4000);

scanner.on("end", devices => {
  if (devices) {
    for (const key in devices) {
      if (devices.hasOwnProperty(key)) {
        if (!devices[key].find(port => port === 554)) {
          console.log(devices[key]);
        }
      }
    }
  }
  console.log(devices);
});
