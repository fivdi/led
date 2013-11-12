## led

Linux boards often have LEDs that can be controlled from userspace. Out of the
box, the Raspberry Pi has one such LED labeled ACT or OK, the BeagleBone has
four, user led 0 through 3. 

The features supported by these LEDs varies from system from system. One system
may allow the LEDs to be turned on and off while the next system will support
additional fetaures such as heartbeat or hardware accelerated blinking.

This module enables these LEDs to be controlled by JavaScript.

## Installation

    $ [sudo] npm install led

## Usage


**Blink all user LEDs on the BeagleBone Black five times a second**

```js
var Led = require('led');

['usr0', 'usr1', 'usr2', 'usr3'].forEach(function (name) {
  new Led('beaglebone:green:' + name).blink(100, 100);
});
```

**Heartbeat all user LEDs leds on the BeagleBone Black**

```js
var Led = require('led');

['usr0', 'usr1', 'usr2', 'usr3'].forEach(function (name) {
  new Led('beaglebone:green:' + name).heartbeat();
});
```

**Blip all user LEDs on the BeagleBone Black once every two seconds**

```js
var Led = require('led');

['usr0', 'usr1', 'usr2', 'usr3'].forEach(function (name) {
  new Led('beaglebone:green:' + name).blink(1, 1999);
});
```

**Turn the ACT LED on the Raspberry Pi on for 1 second**

```js
var Led = require('led'),
  led = new Led('led0');

led.on();

setTimeout(function () {
  led.off();
}, 1000);
```

## How does it work?

Linux systems often have files representing LEDs that appear in
/sys/class/leds. Such LEDs can be controlled by writing the appropriate
values to the appropriate files. More information can be found
[here](https://www.kernel.org/doc/Documentation/leds/)

## API

Ducumentation on the way!

