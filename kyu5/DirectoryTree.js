// https://www.codewars.com/kata/5ff296fc38965a000963dbbd

function multiplyStr(str, n) {
  let res = ''
  for (let i = 0; i < n; ++i) {
    res += str
  }

  return res
}

const tree = {
  Desktop: {
    meetings: {
      '2021-01-12': {
        'notes.txt': 'notes.txt',
        'report.pdf': 'report.pdf',
      },
      '2021-01-24': {
        'report.pdf': 'report.pdf',
      },
      '2020_calendar.xsl': '2020_calendar.xsl',
    },
    misc: {
      photos: {
        'forest_20130430.jpg': 'forest_20130430.jpg',
        'sunset_20130412.jpg': 'sunset_20130412.jpg',
      },
    },
    scripts: {
      'tree.js': 'tree.js',
    },
  },
}

function treeGenerator() {}

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

console.log(printTree(tree))
