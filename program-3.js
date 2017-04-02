var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var strarr = str.split('\n')
console.log(strarr.length -1)



