var express     = require('express')
var fs = require('fs')
var pubnub = require("pubnub").init({
    publish_key   : "pub-c-c428a047-ae49-4deb-b1fe-59e809d16826",
    subscribe_key : "sub-c-d3fc022c-06ec-11e4-a71e-02ee2ddab7fe"
});
var app = express();

app.use(express.static('./client'));

pubnub.publish({
    channel   : 'collabraJam',
    message   : "connected",
    callback  : function(e) { console.log( "SUCCESS!", e ); },
    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
});

pubnub.subscribe({
    channel  : "collabraJam",
    callback : function(message) {
        console.log( " > ", message );
    }
});

var port = process.env.PORT || 8080;
app.listen(8080);
console.log('listening on port 8080')