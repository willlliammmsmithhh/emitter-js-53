class Emitter {
    constructor() { this.events = {}; }
    on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); }
    emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
}
module.exports = Emitter;