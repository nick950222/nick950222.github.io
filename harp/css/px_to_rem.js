var os = require('os')
var fs = require('fs')
var readline = require('readline')
var regExp = /(\d+)px/

var readStream = fs.createReadStream('./main.css')
var writeStream = fs.createWriteStream('./main_mobile.css')

var objReadline = readline.createInterface({
    input : readStream,
})
objReadline.on('line',(line)=>{
    if(regExp.test(line)){
        writeStream.write(line.replace( regExp , (parseInt(RegExp.$1) / 16 ).toFixed(1) + 'rem' )+ os.EOL);
    }
    else {
        writeStream.write(line  + os.EOL);
    }   
})
objReadline.on('close',()=>{
    console.log('readline finished')
})