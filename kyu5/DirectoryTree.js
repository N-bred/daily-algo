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
  const sb = {}
  const split = path.split('/')
  const str = split[0]

  if (isDir(str)) {
    sb[str] = parseString(split.slice(1).join('/'))
  } else {
    sb[str] = str
  }

  return sb
}

function fuseObj(oldObj, newObj) {
  // See if there is a better and more efficient way to compare objects
  if (JSON.stringify(oldObj) === JSON.stringify(newObj)) return newObj

  for (let k in oldObj) {
    if (k in newObj) {
      newObj[k] = fuseObj(oldObj[k], newObj[k])
    } else {
      newObj[k] = oldObj[k]
    }
  }

  return newObj
}

function sortByOrder(a, b) {
  let i = 0
  let strI = 0

  while (i < a.length || i < b.length) {
    if (a[i] === b[i]) {
      ++strI
    } else {
      if (a.charCodeAt(i) < b.charCodeAt(i)) {
        return 1
      }
      return 0
    }

    ++i
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
      .reduce((a, b) => fuseObj(b, a), {}),
  }
}

function printTree(tree, x = 2, y = 0) {
  let str = ''
  let sx = multiplyStr('─', x)
  let sy = multiplyStr(multiplyStr(' ', x) + '|', y)
  for (let k in tree) {
    str += `${sy}${sx} ${k}: ${MP[typeof tree[k]]}\n`
    if (typeof tree[k] === 'object') {
      str += printTree(tree[k], x, y + 1)
    }
  }
  return str
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

console.log(printTree(obj), JSON.stringify(obj, null, 2))

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
