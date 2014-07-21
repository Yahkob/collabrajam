var express     = require('express')
var fs = require('fs')
var pubnub = require("pubnub").init({
    publish_key   : process.env.pubkey,
    subscribe_key : process.env.subkey
});
var app = express();

app.use(express.static('./client'));
var port = process.env.PORT || 8080;

var message = "connected to collabraJam on port: " + port;

pubnub.publish({
    channel   : 'collabraJam',
    message   : message,
    callback  : function(e) { console.log( "SUCCESS!", e ); },
    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
});

pubnub.subscribe({
    channel  : "collabraJam",
    callback : function(message) {
        console.log( " > ", message );
    }
});

app.listen(port);
console.log('listening on port 8080')
