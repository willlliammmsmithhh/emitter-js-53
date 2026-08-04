const Emitter = require('./emitter.js');
const em = new Emitter();
em.on('event', console.log);
em.emit('event', 'Triggered');