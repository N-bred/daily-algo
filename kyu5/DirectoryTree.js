// https://www.codewars.com/kata/5ff296fc38965a000963dbbd

const MP = {
  object: 'Dir',
  string: 'File',
}

function multiplyStr(str, n) {
  let res = ''
  for (let i = 0; i < n; ++i) {
    res += str
  }

  return res
}

function isDir(str) {
  return str.split('.').length < 2
}

function parseString(path) {
  if (!path) return
  const subTree = {}
  const splittedPath = path.split('/')
  const current = splittedPath[0]

  if (isDir(current)) {
    subTree[current] = parseString(splittedPath.slice(1).join('/'))
  } else {
    subTree[current] = current
  }

  return subTree
}

function deepCompareObjects(obj1, obj2) {
  for (let key in obj1) {
    if (!!obj1[key] !== !!obj2[key]) return false

    switch (typeof obj1[key]) {
      case 'object':
        if (!deepCompareObjects(obj1[key], obj2[key])) return false
        break
      default:
        if (obj1[key] !== obj2[key]) return false
    }
  }

  for (let key in obj2) {
    if (typeof obj1[key] == 'undefined') return false
  }
  return true
}

function fuseObj(newObj, oldObj) {
  if (deepCompareObjects(oldObj, newObj)) return newObj

  for (let key in oldObj) {
    if (key in newObj) {
      newObj[key] = fuseObj(newObj[key], oldObj[key])
    } else {
      newObj[key] = oldObj[key]
    }
  }

  return newObj
}

function sortByOrder(a, b) {
  for (let i = 0; i < a.length || i < b.length; ++i) {
    if (a[i] !== b[i]) {
      if (a.charCodeAt(i) < b.charCodeAt(i)) return 1
      return 0
    }
  }
  return -1
}

function comparePathStrings(a, b) {
  const na = a.split('/').length
  const nb = b.split('/').length
  const order = sortByOrder(a, b)

  if (order === 1) {
    if (na < nb) return 1
    return -1
  } else if (order === 0) {
    if (na > nb) return -1
    return 1
  }
  return 0
}

function treeGenerator(root, arr) {
  return {
    [root]: arr
      .sort(comparePathStrings)
      .map((str) => parseString(str))
      .reduce((oldObj, newObj) => fuseObj(oldObj, newObj), {}),
  }
}

function printObjAsTree(obj, x = 2, y = 0) {
  let resultString = ''
  let separatorInX = multiplyStr('─', x)
  let separatorInY = multiplyStr(multiplyStr(' ', x) + '|', y)
  for (let key in obj) {
    resultString += `${separatorInY}${separatorInX} ${key}: ${MP[typeof obj[key]]}\n`
    if (typeof obj[key] === 'object') {
      resultString += printObjAsTree(obj[key], x, y + 1)
    }
  }
  return resultString
}

// TESTING

const files = [
  'misc/photos/forest_20130430.jpg',
  'meetings/2021-01-24/report.pdf',
  'meetings/2021-01-12/notes.txt',
  'meetings/2020_calendar.xlsx',
  'meetings/2021-01-12/report.pdf',
  'misc/photos/sunset_20130412.jpg',
  'scripts/tree.js',
]

const root = 'Desktop'
const obj = treeGenerator(root, files)

console.log(printObjAsTree(obj), JSON.stringify(obj, null, 2))

// Testing ObjCompare

// const tree = {
//   Desktop: {
//     meetings: {
//       '2021-01-12': {
//         'notes.txt': 'notes.txt',
//         'report.pdf': 'report.pdf',
//       },
//       '2021-01-24': {
//         'report.pdf': 'report.pdf',
//       },
//       '2020_calendar.xsl': '2020_calendar.xsl',
//     },
//     misc: {
//       photos: {
//         'forest_20130430.jpg': 'forest_20130430.jpg',
//         'sunset_20130412.jpg': 'sunset_20130412.jpg',
//       },
//     },
//     scripts: {
//       'tree.js': 'tree.js',
//     },
//   },
// }
