var Led = require('../led'),
  led = new Led('ACT');

led.on();

setTimeout(function () {
  led.off();
}, 1000);

