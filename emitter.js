//ECMASCRIPT 5
//creating an object by using a fucntion constructor
function Emitter(){
    this.events = {};
}

//methods of the emmiter object
//the first parameter is the type of the event
//the second parameter is the fucntion that responts to an event
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if (this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;