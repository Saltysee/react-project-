const {spawn} = require('child_process');
const childPython=spawn('python',['devops.py']);
childPython.stdout.on('data',(data)=>{
    console.log(`Current Time: ${data}`)
});