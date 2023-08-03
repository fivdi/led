var Led = require('../led');

['ACT', 'PWR'].forEach(function (name) {
  new Led(name).blink(100, 100);
});
