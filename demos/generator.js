// iterator
function makeInter(arr) { 
  let nextIndex = 0
  // 返回一个迭代器对象，带有next()函数
  return {
    next: () => { 
      if (nextIndex < arr.length) {
        // 返回迭代器结果，包含value和done，没结束前返回迭代器的某一个状态
        return { value: arr[nextIndex++], done: false }
      } else { 
        return { value: undefined ,done: true }
      }
    }
  }
}

const iter = makeInter(['吃饭', '睡觉', '上厕所'])


function* generatorFunc(arr) { 
  for (let i = 0; i<arr.length; i++) { 
    yield arr[i]
  }
}
const gen = generatorFunc(['吃饭', '睡觉', '上厕所'])

console.log('首先：', gen.next().value)
console.log('其次：', gen.next().value)
console.log('然后：', gen.next().value)
console.log('最后：', gen.next().value)