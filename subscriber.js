var redis = require("redis")
var subscriber = redis.createClient();
console.log("hello subscriber")
subscriber.on("message", function (channel, message) {
 console.log("Message: " + message + " on channel: " + channel + " is arrive!")
});
subscriber.subscribe("notification")