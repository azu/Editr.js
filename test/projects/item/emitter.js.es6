// LICENSE : MIT
"use strict";
/*
    Simple EventEmitter
 */
class Emitter {
    constructor() {
        this._handlers = {};
    }

    on(type, handler) {
        if (typeof this._handlers[type] === 'undefined') {
            this._handlers[type] = [];
        }

        this._handlers[type].push(handler);
    }

    emit(type, data) {
        var handlers = this._handlers[type] || [];
        handlers.forEach((handler) => {
            handler.call(this, data);
        });
    }

    off(type, handler) {
        var handlers = this._handlers[type] || [];
        handlers.forEach((ownHandler, index) => {
            if (ownHandler === handler) {
                handlers.splice(index, 1);
            }
        });
    }
}


var emit = new Emitter();
emit.on("hey", function (data) {
    document.body.textContent = data;
});
emit.emit("hey", "aasadasdasdassa");