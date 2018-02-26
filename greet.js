'use strict';
var EventEmitter = require('events');

module.exports = class Greet extends EventEmitter {
    constructor(){
        //invoque the parent constructor
        super();
        this.greeting = 'Hello world';
    }

    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}