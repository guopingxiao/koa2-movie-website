const { readFile } = require('fs')
const EventEmitter = require('events')

class Event extends EventEmitter { }

const event = new Event()

event.on('event', ()=> {
  console.log('event listener')
})

setTimeout(() => { 
  console.log('setTimeout 0')
}, 0)

setTimeout(() => { 
  console.log('setTimeout 100')
}, 100)

setTimeout(() => { 
  console.log('setTimeout 200')
}, 200)

readFile('../../package.json', data => { 
  console.log('readFile package.json')
})

readFile('../../README.md', data => { 
  console.log('readFile README.md')
})

setImmediate(() => { 
  console.log('setImmediate callback')
})

process.nextTick(() => { 
  console.log('process.nextTick callback')
})

Promise.resolve().then(() => { 
  event.emit('event')

  process.nextTick(() => { 
    console.log('Promise.then => process.nextTick')
  })

  console.log('Promise then 1 callback')
}).then(() => { 
  console.log('Promise then 2 callback')
})