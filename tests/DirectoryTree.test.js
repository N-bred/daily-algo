const {
  DirectoryTree: { treeGenerator, printObjAsTree, isDir, deepCompareObjects, parseString, fuseObj, multiplyStr },
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

test('Receives a String and a String[] with different routes in the following format: "path/path/path", it should parse the strings and return an object with a directory-like structure', () => {
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

test('Receives an object with a directory-like structure and prints it to the console as a tree, it should return a string with the tree structure', () => {
  expect(printObjAsTree(result)).toEqual(tree)
})

test('Receives a string and returns a boolean on whether or not is a directory path', () => {
  expect(isDir('misc/photos/')).toBe(true)
})

test('Receives two objects and compares them to see if they are 100% equal, should return a boolean', () => {
  expect(deepCompareObjects(result, mockObj)).toBe(true)
})

test('Receives a string with a path and parses it to an object with a directory-like structure, should return an object with the paths parsed', () => {
  expect(parseString('misc/photos/forest_20130430.jpg')).toEqual({
    misc: { photos: { 'forest_20130430.jpg': 'forest_20130430.jpg' } },
  })
})

test('Receives a string and a quantity, returns the string times the quantity', () => {
  expect(multiplyStr('Test', 3)).toEqual('TestTestTest')
})

test('Receives two objects and fuses them into one', () => {
  expect(
    fuseObj(
      { originalProp: 'The original' },
      { test: 'Test 1', name: 'DirectoryTreeFuseObj', obj: { subProp: 'Recursive Fusing' } }
    )
  ).toEqual({
    originalProp: 'The original',
    test: 'Test 1',
    name: 'DirectoryTreeFuseObj',
    obj: { subProp: 'Recursive Fusing' },
  })
})
