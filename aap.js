// app js uses our own emitter object
var Emitter =  require('./emitter');
var emitr = new Emitter();

//adding events and emits(method) to our emitter
emitr.on('greet', function(){
    console.log("Hello");
});

//adding another listenner
emitr.on('greet', function(){
    console.log("Hello 2");
});

//manually invoke the event
emitr.emit('greet');