//we use the envents and the util node js libraries
var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    EventEmitter.call(this); // constructor, inhering all properties of EventEmitter
    this.greeting = 'Hello world';
}

//making the inherence of Greetr from EvenEmitter
util.inherits(Greetr, EventEmitter);

//addding a new method to the Geetr object
Greetr.prototype.greet = function(data){
    console.log(this.greeting +': '+ data);
    //emit method is taken from EventEmitter
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Tony');
