const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, '', 'input.json');

async function getFileContents(path) {
    try {
        return new Promise(async(resolve, reject) => {
             fs.stat(path,async function (err, stats) {
                if (err) 
                {
                    reject('File does not exist');
                }
                    if (stats&&stats.size > 0) {
                        fs.readFile(path, "utf8",function (err, data) {
                            if (err) reject(err);
                            resolve(data)
                          });
                    } else {
                        reject('File exists but there is no content')
                    }
              });
        })
    } catch (err) {
       console.error(err);
    }
}

 getFileContents(inputFilePath).then((res)=>{
    if (res) {
        console.log(res);
    }
}).catch((err)=>{
    console.error(err)
});