function f1(start = 0, step = 1) {
  let caunt = start
  function f2() {
    let value = caunt
    caunt += step
    return value
  }

  return f2
}
let generator = f1(10, 3)
let generator1 = f1(7, 1)

console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator1())
console.log(generator1())

function sequence(x, y) {
  let count = x
  return function gen() {
    let value = count
    count += y
    return value
  }
}

let gen2 = sequence(0, 2)

function take(fn, count) {
  let arr = []
  for (let i = 0; i < count; i++) {
    arr.push(fn())
  }
  return arr
}

console.log(take(gen2, 5))

const btn = document.querySelector('.button')
btn.addEventListener('click', checkTest)

function checkTest() {
  let name = prompt('Кто там?', '')

  if (name === 'true') {
    let pass = prompt('Пароль?', '')
    if (pass === 'qwerty') {
      alert('Здравствуйте')
    } else {
      while (pass !== 'qwerty' || pass === '' || pass === null) {
        pass = prompt('Пароль обязателен и должен быть верный', '')
        if (pass === 'qwerty') {
          alert('Здравствуйте')
          break
        }
      }
    }
  }
  // #########################################
  // Если имя не правильное или пусто то
  else {
    while (name != 'true' || name === '' || name === null) {
      name = prompt('Введите имя, оно обязательно и должно быть верным!', '')
      if (name === 'true') {
        pass = prompt('Пароль?', '')
        if (pass === 'qwerty') {
          alert('Здравствуйте')
        } else {
          while (pass !== 'qwerty' || pass === '' || pass === null) {
            pass = prompt('Пароль обязателен и должен быть верный', '')
            if (pass === 'qwerty') {
              alert('Здравствуйте')
              break
            }
          }
        }
      }
    }
  }
}

let array = [2, 4, 6, 8]
function map(fn, array) {
  let arr = array.slice()

  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i])
  }

  return arr
}

let square = function (x) {
  return x * x
}

console.log(map(square, array))
console.log(array)

function fmap(mixin, fn) {
  return function (...args) {
    let x = fn(...args)
    return mixin(x)
  }
}

let sequence = function (a, b) {
  let count = a
  return function () {
    let value = count
    count += b
    return value
  }
}

function square(x) {
  return x * x
}
function add(a, b) {
  return a + b
}

let gen = sequence(1, 1)

let squareAdd = fmap(square, add)
console.log(squareAdd(2, 3)) // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)) // 144 = (5 + 7) ^ 2
console.log(squareAdd(6, 9)) // 144 = (6 + 9) ^ 2
