const co = require('co')
const fetch = require('node-fetch')

const fetchGen = function* () { 
  let res = yield fetch('https://api.douban.com/v2/movie/1291843')
  let movie = yield res.json()
  let summary = movie.summary
  console.log('summary:', summary)
}

co(fetchGen)

// co 执行原理分析
const run = function (gen) { 
  const iterator = gen()
  const iter = iterator.next()
  const promise = iter.value

  promise.then(data => { 
    const iter2 = iterator.next(data)
    const promise2 = iter2.value

    promise2.then(data => { 
      iterator.next(data)
    })
  })
}

run(fetchGen)