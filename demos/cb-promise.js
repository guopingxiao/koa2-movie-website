// callback
const fs = require('fs')
const util = require('util')

const callBackRead = (path) => { 
  fs.readFile(path, (err, data) => { 
    if (err) console.log(err)
    data = JSON.parse(data)
    console.log('callBackRead:', data.name)
  })
}

callBackRead('../package.json')

// Promise
const promiseRead = (path) => { 
  return new Promise((resolve, reject) => { 
    fs.readFile(path, (err, data) => { 
      if (err) reject(err)
      resolve(data)
    })
  })
}

promiseRead('../package.json').then(data => { 
  data = JSON.parse(data)
  console.log('promiseRead:', data.name)
}).catch(err => { 
  console.log(err)
  })

// Promisify

util.promisify(fs.readFile)('../package.json')
  .then(JSON.parse)
  .then(data => { 
    console.log('promisifyRead:', data.name)
  }).catch(err => { 
    console.log(err)
  })

// async

const asyncRead = async (path) => { 
  try {
    let data = await util.promisify(fs.readFile)(path)
    console.log('asyncRead:', JSON.parse(data).name)
  } catch (error) {
    console.log(error)
  }
}

asyncRead('../package.json')






