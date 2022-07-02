// 深拷贝
const LoginData = (obj) => {
  const data = Object.prototype.toString.call(obj)
  const typeString = {
    '[Object Array]': 'array',
    '[Object Object]': 'object',
    '[Object Function]': 'function',
    '[Object Number]': 'number',
    '[Object String]': 'string',
    '[Object Null]': 'null',
    '[Object Undefined]': 'Undefined',
    '[Object RegExp]': 'RegExp',
    '[Object Boolean]': 'boolean',
    '[Object Date]': 'date'
  }

  return typeString[data]
}

const typeData = (data) => {
  const str = LoginData(data)
  let obj = null
  if (str === 'array') {
    obj = []
    for (let i = 0; i < data.length; i++) {
      obj.push(typeData(data[i]))
    }
  } else if (str === 'object') {
    obj = {}
    for (const index in data) {
      obj[index] = typeData(data[index])
    }
  } else {
    return data
  }
  return obj
}

export default {
  typeData
}
