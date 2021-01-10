// https://www.codewars.com/kata/5ff296fc38965a000963dbbd

function multiplyStr(str, n) {
  let res = ''
  for (let i = 0; i < n; ++i) {
    res += str
  }

  return res
}

function isDir(str) {
  const splitted = str.split('.')
  return splitted.length < 2
}

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

const gen = (path) => {
  if (!path) return
  const sb = {}
  const split = path.split('/')
  const str = split[0]

  if (isDir(str)) {
    sb[str] = gen(split.slice(1).join('/'))
  } else {
    sb[str] = str
  }

  return sb
}

function treeGenerator(root, arr) {
  const tree = {
    [root]: {},
  }

  const paths = arr.map((str) => gen(str)).reduce((a, b) => ({ ...a, ...b }), {})

  return paths
}

const mp = {
  object: 'Dir',
  string: 'File',
}

function printTree(tree, x = 2, y = 0) {
  let str = ''
  let sx = multiplyStr('─', x)
  let sy = multiplyStr(multiplyStr(' ', x) + '|', y)
  for (let k in tree) {
    str += `${sy}${sx} ${k}: ${mp[typeof tree[k]]}\n`
    if (typeof tree[k] === 'object') {
      str += printTree(tree[k], x, y + 1)
    }
  }
  return str
}

const files = [
  'meetings/2021-01-12/notes.txt',
  'meetings/2020_calendar.xlsx',
  'meetings/2021-01-12/report.pdf',
  'misc/photos/forest_20130430.jpg',
  'misc/photos/sunset_20130412.jpg',
  'scripts/tree.py',
  'meetings/2021-01-24/report.pdf',
]

const root = 'Desktop'

// console.log(treeGenerator(root, files.sort()))
console.log(treeGenerator(root, files))
