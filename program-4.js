var fs = require('fs')


var buf = fs.readFile(process.argv[2], 'utf8', function callback(err,data) {
    if (err) throw err
    
    var strarr = data.split('\n')
    console.log(strarr.length -1)
})



