const {
  DirectoryTree: { treeGenerator, printObjAsTree },
} = require('../kyu5')

const { expect } = require('@jest/globals')

const INPUTS = [
  'misc/photos/forest_20130430.jpg',
  'meetings/2021-01-24/report.pdf',
  'meetings/2021-01-12/notes.txt',
  'meetings/2020_calendar.xlsx',
  'meetings/2021-01-12/report.pdf',
  'misc/photos/sunset_20130412.jpg',
  'scripts/tree.js',
]

const mockObj = {
  Desktop: {
    meetings: {
      '2021-01-12': {
        'notes.txt': 'notes.txt',
        'report.pdf': 'report.pdf',
      },
      '2021-01-24': {
        'report.pdf': 'report.pdf',
      },
      '2020_calendar.xlsx': '2020_calendar.xlsx',
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

const root = 'Desktop'

const result = treeGenerator(root, INPUTS)

test('treeGenerator receives a String and a StringArray String[] with different routes in the following format: "path/path/path", it should parse the strings and return an object with a directory-like structure', () => {
  expect(result).toEqual(mockObj)
})

const tree = `── Desktop: Dir
  |── meetings: Dir
  |  |── 2021-01-12: Dir
  |  |  |── notes.txt: File
  |  |  |── report.pdf: File
  |  |── 2021-01-24: Dir
  |  |  |── report.pdf: File
  |  |── 2020_calendar.xlsx: File
  |── misc: Dir
  |  |── photos: Dir
  |  |  |── forest_20130430.jpg: File
  |  |  |── sunset_20130412.jpg: File
  |── scripts: Dir
  |  |── tree.js: File
`

test('printObjAsTree takes an object with a directory-like structure and prints it to the console as a tree, it should return a string with the tree structure', () => {
  expect(printObjAsTree(result)).toEqual(tree)
})
