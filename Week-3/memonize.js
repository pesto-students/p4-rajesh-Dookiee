
//closure
const memoize = function (func) {
  const cache = {}
  return (...args) => {
    const key = args.join(',')
    if(key in cache)
      return cache[key]
    cache[key] = func(args)
    return cache[key]
  }
}

const add = memoize(args => args.reduce((prevSum, i) => prevSum+i , 0));

console.log(add(10,20,40));
console.log(add(10,20,40));